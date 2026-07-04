#![no_std]
use soroban_sdk::{
    contract, contracterror, contractimpl, contracttype, symbol_short, Address, Env,
};

#[contracttype]
#[derive(Clone)]
pub enum DataKey {
    Admin,
    Rate,
    Balance(Address),
    Recycled(Address),
}

#[contracterror]
#[derive(Copy, Clone, Debug, Eq, PartialEq)]
#[repr(u32)]
pub enum Error {
    AlreadyInitialized = 1,
    NotInitialized = 2,
    InsufficientBalance = 3,
    InvalidAmount = 4,
}

#[contract]
pub struct RecicToken;

#[contractimpl]
impl RecicToken {
    /// Configura o contrato. `rate` = tokens de recompensa por kg reciclado.
    pub fn initialize(env: Env, admin: Address, rate: i128) -> Result<(), Error> {
        if env.storage().instance().has(&DataKey::Admin) {
            return Err(Error::AlreadyInitialized);
        }
        if rate <= 0 {
            return Err(Error::InvalidAmount);
        }
        env.storage().instance().set(&DataKey::Admin, &admin);
        env.storage().instance().set(&DataKey::Rate, &rate);
        Ok(())
    }

    /// Ecoponto (admin) valida um descarte de `kg` e minta a recompensa para o cidadao.
    pub fn register_recycle(env: Env, to: Address, kg: i128) -> Result<i128, Error> {
        let admin: Address = env
            .storage()
            .instance()
            .get(&DataKey::Admin)
            .ok_or(Error::NotInitialized)?;
        admin.require_auth();
        if kg <= 0 {
            return Err(Error::InvalidAmount);
        }
        let rate: i128 = env.storage().instance().get(&DataKey::Rate).unwrap();
        let reward = kg * rate;

        let bal = Self::balance(env.clone(), to.clone());
        env.storage()
            .persistent()
            .set(&DataKey::Balance(to.clone()), &(bal + reward));

        let recycled: i128 = env
            .storage()
            .persistent()
            .get(&DataKey::Recycled(to.clone()))
            .unwrap_or(0);
        env.storage()
            .persistent()
            .set(&DataKey::Recycled(to.clone()), &(recycled + kg));

        env.events()
            .publish((symbol_short!("recycle"), to), (kg, reward));
        Ok(reward)
    }

    /// Cidadao gasta `amount` tokens no comercio (desconto). Requer auth do cidadao.
    pub fn redeem(env: Env, from: Address, merchant: Address, amount: i128) -> Result<(), Error> {
        from.require_auth();
        if amount <= 0 {
            return Err(Error::InvalidAmount);
        }
        let bal = Self::balance(env.clone(), from.clone());
        if bal < amount {
            return Err(Error::InsufficientBalance);
        }
        env.storage()
            .persistent()
            .set(&DataKey::Balance(from.clone()), &(bal - amount));
        let mbal = Self::balance(env.clone(), merchant.clone());
        env.storage()
            .persistent()
            .set(&DataKey::Balance(merchant.clone()), &(mbal + amount));

        env.events()
            .publish((symbol_short!("redeem"), from, merchant), amount);
        Ok(())
    }

    pub fn balance(env: Env, id: Address) -> i128 {
        env.storage()
            .persistent()
            .get(&DataKey::Balance(id))
            .unwrap_or(0)
    }

    pub fn total_recycled(env: Env, id: Address) -> i128 {
        env.storage()
            .persistent()
            .get(&DataKey::Recycled(id))
            .unwrap_or(0)
    }

    pub fn rate(env: Env) -> i128 {
        env.storage().instance().get(&DataKey::Rate).unwrap_or(0)
    }
}

mod test;
