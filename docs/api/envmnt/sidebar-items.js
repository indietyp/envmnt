initSidebarItems({"fn":[["contains","Returns true if the provided environment variable is defined and contains the provided value."],["contains_ignore_case","Returns true if the provided environment variable is defined and contains the provided value regardless of the case."],["evaluate_and_load_file","Parses the provided env file and loads all environment variables."],["evaluate_and_set_all","Sets all the provided env key/value pairs."],["exists","Returns true environment variable is defined."],["expand","Expands the provided string value by replacing the environment variables defined in it. The syntax of the environment variables is based on the type requested."],["get_any","Returns the first environment variable found."],["get_list","Returns the requested environment variable as a string vector."],["get_list_with_options","Returns the requested environment variable as a string vector."],["get_or","Returns the environment variable value or if is not defined, the default value will be returned."],["get_or_panic","Returns the environment variable value. If the variable is not defined, this function will panic."],["get_remove","Removes the provided environment variable and returns its previous value (if any)."],["get_set","Sets the environment variable value and returns the previous value."],["is","Returns false if environment variable value if falsy. The value is falsy if it is one of the following: * Empty string * \"false\" (case insensitive) * \"no\" (case insensitive) * \"0\" Any other value is returned as true. This is same as calling is_or(\"varname\", false)"],["is_all_exists","Returns true if all of environment variables are defined."],["is_any_exists","Returns true if any of environment variables is defined."],["is_equal","Returns true if the provided environment variable is defined and equals the provided value."],["is_or","Returns false if environment variable value if falsy. The value is falsy if it is one of the following: * Empty string * \"false\" (case insensitive) * \"no\" (case insensitive) * \"0\" Any other value is returned as true."],["load_file","Parses the provided env file and loads all environment variables."],["parse_file","Parses the provided env file and returns its content as a map of key/value."],["remove","Removes the provided environment variable."],["remove_all","Removes all provided environment variables."],["set","Sets the environment variable value."],["set_all","Sets all the provided env key/value pairs."],["set_bool","Sets the environment variable with a true/false value as string."],["set_list","Sets the provided string vector as an environment variable."],["set_list_with_options","Sets the provided string vector as an environment variable."],["set_optional","Sets the environment variable if the provided option contains a value."],["vars","Returns all environment variables as a vector."]],"mod":[["environment","environment"]],"type":[["ExpansionType","Expansion Type - unix/windows style"],["ListOptions","Get/Set list options"]]});