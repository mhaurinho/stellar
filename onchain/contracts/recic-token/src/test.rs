#![cfg(test)]
use super::*;
use soroban_sdk::{testutils::Address as _, Address, Env};

fn setup() -> (Env, RecicTokenClient<'static>, Address, Address, Address) {
    let env = Env::default();
    env.mock_all_auths();
    let contract_id = env.register(RecicToken, ());
    let client = RecicTokenClient::new(&env, &contract_id);
    let admin = Address::generate(&env);
    let citizen = Address::generate(&env);
    let merchant = Address::generate(&env);
    (env, client, admin, citizen, merchant)
}

#[test]
fn test_full_flow() {
    let (_env, client, admin, citizen, merchant) = setup();
    client.initialize(&admin, &10);
    assert_eq!(client.rate(), 10);

    // 5 kg * 10 = 50 tokens de recompensa
    let reward = client.register_recycle(&citizen, &5);
    assert_eq!(reward, 50);
    assert_eq!(client.balance(&citizen), 50);
    assert_eq!(client.total_recycled(&citizen), 5);

    // cidadao gasta 30 no comercio
    client.redeem(&citizen, &merchant, &30);
    assert_eq!(client.balance(&citizen), 20);
    assert_eq!(client.balance(&merchant), 30);
}

#[test]
fn test_double_init_fails() {
    let (_env, client, admin, _c, _m) = setup();
    client.initialize(&admin, &10);
    assert_eq!(
        client.try_initialize(&admin, &10),
        Err(Ok(Error::AlreadyInitialized))
    );
}

#[test]
fn test_redeem_insufficient() {
    let (_env, client, admin, citizen, merchant) = setup();
    client.initialize(&admin, &10);
    client.register_recycle(&citizen, &1); // 10 tokens
    assert_eq!(
        client.try_redeem(&citizen, &merchant, &999),
        Err(Ok(Error::InsufficientBalance))
    );
}

#[test]
fn test_invalid_amounts() {
    let (_env, client, admin, citizen, _m) = setup();
    client.initialize(&admin, &10);
    assert_eq!(
        client.try_register_recycle(&citizen, &0),
        Err(Ok(Error::InvalidAmount))
    );
}
