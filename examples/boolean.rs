extern crate envmnt;

fn main() {
    envmnt::set_bool("FLAG_VAR", true);
    let mut flag_value = envmnt::is_or("FLAG_VAR", false);
    println!("Bool Flag: {}", &flag_value);

    flag_value = envmnt::is("FLAG_VAR");
    assert!(flag_value);

    envmnt::set_bool("FLAG_VAR", true);
    assert!(envmnt::is_equal("FLAG_VAR", "true"));

    envmnt::set("MY_ENV_VAR", "SOME VALUE");
    let same = envmnt::is_equal("MY_ENV_VAR", "SOME VALUE");
    println!("Value Is Same: {}", &same);
}
