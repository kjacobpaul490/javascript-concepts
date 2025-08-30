// Logical Assignment Operators Examples

// 1. Logical AND Assignment (&&=)
// Only assigns if the left operand is truthy
function demonstrateAndAssignment() {
    console.log("=== Logical AND Assignment (&&=) ===");
    
    let user = {
        name: "John",
        email: null,
        settings: null
    };
    
    // Traditional way
    if (user.name) {
        user.name = user.name + " Doe";
    }
    console.log("Traditional way:", user.name); // "John Doe"
    
    // Using &&= operator
    user.name &&= user.name + " Smith";
    console.log("Using &&=:", user.name); // "John Doe Smith"
    
    // If left operand is falsy, no assignment happens
    user.email &&= "john@example.com";
    console.log("Email remains null:", user.email); // null
    
    // Practical example: Only update if value exists
    let config = { theme: "dark" };
    config.theme &&= config.theme.toUpperCase();
    console.log("Theme updated:", config.theme); // "DARK"
    
    let emptyConfig = { theme: null };
    emptyConfig.theme &&= "light";
    console.log("Theme not updated:", emptyConfig.theme); // null
}

// 2. Logical OR Assignment (||=)
// Only assigns if the left operand is falsy
function demonstrateOrAssignment() {
    console.log("\n=== Logical OR Assignment (||=) ===");
    
    let user = {
        name: "",
        email: null,
        role: undefined,
        status: "active"
    };
    
    // Traditional way
    if (!user.name) {
        user.name = "Anonymous";
    }
    console.log("Traditional way:", user.name); // "Anonymous"
    
    // Using ||= operator
    user.email ||= "default@example.com";
    console.log("Email assigned:", user.email); // "default@example.com"
    
    user.role ||= "user";
    console.log("Role assigned:", user.role); // "user"
    
    // If left operand is truthy, no assignment happens
    user.status ||= "inactive";
    console.log("Status unchanged:", user.status); // "active"
    
    // Practical example: Default values
    let settings = {};
    settings.language ||= "en";
    settings.timezone ||= "UTC";
    settings.notifications ||= true;
    console.log("Default settings:", settings);
}

// 3. Nullish Coalescing Assignment (??=)
// Only assigns if the left operand is null or undefined
function demonstrateNullishAssignment() {
    console.log("\n=== Nullish Coalescing Assignment (??=) ===");
    
    let user = {
        name: "",
        email: null,
        age: 0,
        isActive: false,
        preferences: undefined
    };
    
    // Traditional way
    if (user.email === null || user.email === undefined) {
        user.email = "user@example.com";
    }
    console.log("Traditional way:", user.email); // "user@example.com"
    
    // Using ??= operator
    user.preferences ??= {};
    console.log("Preferences assigned:", user.preferences); // {}
    
    // Important: Only null and undefined trigger assignment
    user.name ??= "Default Name"; // "" is falsy but not null/undefined
    console.log("Name unchanged (empty string):", user.name); // ""
    
    user.age ??= 25; // 0 is falsy but not null/undefined
    console.log("Age unchanged (zero):", user.age); // 0
    
    user.isActive ??= true; // false is falsy but not null/undefined
    console.log("isActive unchanged (false):", user.isActive); // false
    
    // Practical example: API response handling
    let apiResponse = {
        data: null,
        message: "",
        status: 0,
        timestamp: undefined
    };
    
    apiResponse.data ??= [];
    apiResponse.message ??= "No message";
    apiResponse.status ??= 200;
    apiResponse.timestamp ??= new Date().toISOString();
    
    console.log("API response with defaults:", apiResponse);
}

// 4. Comparison of all three operators
function compareOperators() {
    console.log("\n=== Comparison of All Three Operators ===");
    
    let testValues = [null, undefined, "", 0, false, "hello", 42, true];
    
    testValues.forEach(value => {
        let obj1 = { prop: value };
        let obj2 = { prop: value };
        let obj3 = { prop: value };
        
        // &&= only assigns if truthy
        obj1.prop &&= "assigned by &&=";
        
        // ||= only assigns if falsy
        obj2.prop ||= "assigned by ||=";
        
        // ??= only assigns if null or undefined
        obj3.prop ??= "assigned by ??=";
        
        console.log(`Value: ${JSON.stringify(value)}`);
        console.log(`  &&= result: ${JSON.stringify(obj1.prop)}`);
        console.log(`  ||= result: ${JSON.stringify(obj2.prop)}`);
        console.log(`  ??= result: ${JSON.stringify(obj3.prop)}`);
        console.log("---");
    });
}

// 5. Practical use cases
function practicalExamples() {
    console.log("\n=== Practical Use Cases ===");
    
    // Example 1: User profile with defaults
    function createUserProfile(userData) {
        let profile = { ...userData };
        
        // Set defaults only if values are null/undefined
        profile.avatar ??= "/default-avatar.png";
        profile.bio ??= "No bio available";
        profile.theme ??= "light";
        
        // Only update if values exist
        profile.displayName &&= profile.displayName.trim();
        profile.email &&= profile.email.toLowerCase();
        
        // Set fallbacks for empty values
        profile.location ||= "Unknown";
        profile.website ||= "No website";
        
        return profile;
    }
    
    let user1 = {
        displayName: "  John Doe  ",
        email: "JOHN@EXAMPLE.COM",
        avatar: null,
        bio: "",
        location: ""
    };
    
    let user2 = {
        displayName: "",
        email: null,
        avatar: undefined,
        bio: null,
        location: null
    };
    
    console.log("User 1 profile:", createUserProfile(user1));
    console.log("User 2 profile:", createUserProfile(user2));
    
    // Example 2: Configuration merging
    function mergeConfig(defaultConfig, userConfig) {
        let config = { ...defaultConfig };
        
        for (let key in userConfig) {
            // Only override if user provided a non-null/undefined value
            config[key] ??= userConfig[key];
        }
        
        return config;
    }
    
    let defaults = {
        apiUrl: "https://api.example.com",
        timeout: 5000,
        retries: 3,
        debug: false
    };
    
    let userConfig = {
        apiUrl: null, // Won't override
        timeout: 10000, // Will override
        retries: undefined, // Won't override
        debug: true // Will override
    };
    
    console.log("Merged config:", mergeConfig(defaults, userConfig));
}

// Run all examples
function runAllExamples() {
    demonstrateAndAssignment();
    demonstrateOrAssignment();
    demonstrateNullishAssignment();
    compareOperators();
    practicalExamples();
}

// Original login function (keeping for compatibility)
function login(firstName, lastName, gender, age, email, education) {
    if (gender == "Male" && (education == "Graduation" || education == "Post Graduation")) {
        alert("You are eligible for the job");
    } else {
        alert("You are not eligible for the job");
    }
}
