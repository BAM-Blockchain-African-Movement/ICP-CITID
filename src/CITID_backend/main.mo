import Time "mo:base/Time";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Nat64 "mo:base/Nat64";
// import Hash "mo:base/Hash";
import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Iter "mo:base/Iter";

actor NationalIDSystem {

    // User roles
    type UserRole = {
        #Government;
        #Authority;
        #Institution;
        #Citizen;
    };

    // User structure
    type User = {
        role : UserRole;
        name : Text;
        email : Text;
        doc : Text;
        password : Text;
        date : Nat64;
    };

    // ID card structure
    type IdCard = {
        id : Principal;
        name : Text;
        surname : Text;
        date_of_birth : Text;
        place_of_birth : Text;
        sex : Text;
        height : Nat;
        profile : Text;
        profession : Text;
        father_name : Text;
        mother_name : Text;
        password : Text;
        signature : Text;
        terms_and_conditions : Bool;
        address : Text;
        division : Text;
        date_of_issue : Time.Time;
        date_of_expiry : Time.Time;
        authority : Text;
    };

    type Share = {
        id : Principal;
        name : Text;
        surname : Text;
        date_of_birth : Text;
        place_of_birth : Text;
        sex : Text;
        height : Nat;
        profile : Text;
        profession : Text;
        father_name : Text;
        mother_name : Text;
        password : Text;
        signature : Text;
        terms_and_conditions : Bool;
        address : Text;
        division : Text;
        date_of_issue : Time.Time;
        date_of_expiry : Time.Time;
        authority : Text;
    };

    // private stable var nextId : Nat = 0;
    private var users = HashMap.HashMap<Principal, User>(0, Principal.equal, Principal.hash);
    private var idCards = HashMap.HashMap<Principal, IdCard>(0, Principal.equal, Principal.hash);
    private var sharedCards = HashMap.HashMap<Principal, Share>(0, Principal.equal, Principal.hash); // Changed to Share

    // Fuction that gets user procedure registration
    public shared(msg) func createUser(
        role : UserRole,
        name : Text,
        email : Text,
        doc : Text,
        password : Text,
        date : Nat64
    ) : async Result.Result<Bool, Text> {
        let user : User = {
            role = role;
            name = name;
            email = email;
            doc = doc;
            password = password;
            date = date;
        };
        users.put(msg.caller, user);
        #ok(true)
    };

    // Function that Creates id cards
    public shared(msg) func createIdCard(
        name : Text,
        surname : Text,
        date_of_birth : Text,
        place_of_birth : Text,
        sex : Text,
        height : Nat,
        profile : Text,
        profession : Text,
        father_name : Text,
        mother_name : Text,
        password : Text,
        signature : Text,
        terms_and_conditions : Bool,
        address : Text,
        division : Text,
        date_of_issue : Time.Time,
        date_of_expiry : Time.Time,
        authority : Text,
    ) : async Result.Result<Principal, Text> {
        switch (users.get(msg.caller)) {
            case (?user) {
                switch (user.role) {
                    case (#Citizen) {
                        let idCard : IdCard = {
                            id = msg.caller;
                            name = name;
                            surname = surname;
                            date_of_birth = date_of_birth;
                            place_of_birth = place_of_birth;
                            sex = sex;
                            height = height;
                            profile = profile;
                            profession = profession;
                            father_name = father_name;
                            mother_name = mother_name;
                            password = password;
                            signature = signature;
                            terms_and_conditions = terms_and_conditions;
                            address = address;
                            division = division;
                            date_of_issue = date_of_issue;
                            date_of_expiry = date_of_expiry;
                            authority = authority;
                        };
                        idCards.put(idCard.id, idCard);
                        #ok(idCard.id)
                    };
                    case (#Authority) {
                        let idCard : IdCard = {
                            id = msg.caller;
                            name = name;
                            surname = surname;
                            date_of_birth = date_of_birth;
                            place_of_birth = place_of_birth;
                            sex = sex;
                            height = height;
                            profile = profile;
                            profession = profession;
                            father_name = father_name;
                            mother_name = mother_name;
                            password = password;
                            signature = signature;
                            terms_and_conditions = terms_and_conditions;
                            address = address;
                            division = division;
                            date_of_issue = date_of_issue;
                            date_of_expiry = date_of_expiry;
                            authority = authority;
                        };
                        idCards.put(idCard.id, idCard);
                        #ok(idCard.id)
                    };
                    case (#Government) {
                        let idCard : IdCard = {
                            id = msg.caller;
                            name = name;
                            surname = surname;
                            date_of_birth = date_of_birth;
                            place_of_birth = place_of_birth;
                            sex = sex;
                            height = height;
                            profile = profile;
                            profession = profession;
                            father_name = father_name;
                            mother_name = mother_name;
                            password = password;
                            signature = signature;
                            terms_and_conditions = terms_and_conditions;
                            address = address;
                            division = division;
                            date_of_issue = date_of_issue;
                            date_of_expiry = date_of_expiry;
                            authority = authority;
                        };
                        idCards.put(idCard.id, idCard);
                        #ok(idCard.id)
                    };
                    case (_) #err("Access denied. Only Citizens, authorities and government can create ID cards.")
                };
            };
            case (null) #err("User not found.")
        }
    };

    // Function that let user to share id card
    public shared(msg) func shareIdCard(id:Principal) : async Result.Result<Principal, Text> {

        switch (users.get(msg.caller)) {
            case (?user) {
                switch (user.role) {
                    case (#Citizen) {
                        switch(idCards.get(id)) {
                            case(?idCard) { 
                                let sharedCard : Share = {
                                    id = idCard.id;
                            name = idCard.name;
                            surname = idCard.surname;
                            date_of_birth = idCard.date_of_birth;
                            place_of_birth = idCard.place_of_birth;
                            sex = idCard.sex;
                            height = idCard.height;
                            profile = idCard.profile;
                            profession = idCard.profession;
                            father_name = idCard.father_name;
                            mother_name = idCard.mother_name;
                            password = idCard.password;
                            signature = idCard.signature;
                            terms_and_conditions = idCard.terms_and_conditions;
                            address = idCard.address;
                            division = idCard.division;
                            date_of_issue = idCard.date_of_issue;
                            date_of_expiry = idCard.date_of_expiry;
                            authority = idCard.authority;
                                }; 
                                sharedCards.put(idCard.id, sharedCard); // Store the Share object
                                #ok(idCard.id);
                             };
                            case(_) #err("Error ID card not found.");
                        };
                    };
                    case (#Authority) {
                        switch(idCards.get(id)) {
                            case(?idCard) { 
                                let sharedCard : Share = {
                                    id = idCard.id;
                            name = idCard.name;
                            surname = idCard.surname;
                            date_of_birth = idCard.date_of_birth;
                            place_of_birth = idCard.place_of_birth;
                            sex = idCard.sex;
                            height = idCard.height;
                            profile = idCard.profile;
                            profession = idCard.profession;
                            father_name = idCard.father_name;
                            mother_name = idCard.mother_name;
                            password = idCard.password;
                            signature = idCard.signature;
                            terms_and_conditions = idCard.terms_and_conditions;
                            address = idCard.address;
                            division = idCard.division;
                            date_of_issue = idCard.date_of_issue;
                            date_of_expiry = idCard.date_of_expiry;
                            authority = idCard.authority;
                                }; 
                                sharedCards.put(idCard.id, sharedCard); // Store the Share object
                                #ok(idCard.id);
                             };
                            case(_) #err("Error ID card not found.");
                        };
                    };
                    case (#Government) {
                        switch(idCards.get(id)) {
                            case(?idCard) { 
                                let sharedCard : Share = {
                                    id = idCard.id;
                            name = idCard.name;
                            surname = idCard.surname;
                            date_of_birth = idCard.date_of_birth;
                            place_of_birth = idCard.place_of_birth;
                            sex = idCard.sex;
                            height = idCard.height;
                            profile = idCard.profile;
                            profession = idCard.profession;
                            father_name = idCard.father_name;
                            mother_name = idCard.mother_name;
                            password = idCard.password;
                            signature = idCard.signature;
                            terms_and_conditions = idCard.terms_and_conditions;
                            address = idCard.address;
                            division = idCard.division;
                            date_of_issue = idCard.date_of_issue;
                            date_of_expiry = idCard.date_of_expiry;
                            authority = idCard.authority;
                                }; 
                                sharedCards.put(idCard.id, sharedCard); // Store the Share object
                                #ok(idCard.id);
                             };
                            case(_) #err("Error ID card not found.");
                        };
                    };
                    case (_) #err("Access denied. Only citizens,authorities and government can share ID cards.")
                };
            };
            case (null) #err("User not found.")
        }
    };

    // Function to get card by id
    public query func getCard(id : Principal) : async ?IdCard {
        idCards.get(id)
    };

    // Function to get all cards
    public query func getAllCards() : async [IdCard] {
        Iter.toArray(idCards.vals())
    };

    // Function to get all users
    public query func getUsers() : async [User] {
        Iter.toArray(users.vals())
    };

    // Function to get all shared id cards
    public query func getSharedIds() : async [Share] { // Changed to Share
        Iter.toArray(sharedCards.vals())
    };

    // Function that permits the user to revoke this / her id from share
   public shared(msg) func revokeSharedCard(id: Principal) : async Bool {
    switch (users.get(msg.caller)) {
            case (?user) {
                switch (user.role) {
                    case (#Citizen) {
                        switch(idCards.get(id)) {
                            case(?idCard) { 
                                sharedCards.delete(idCard.id); 
                                return true;
                             };
                            case(_) return false;
                        };
                    };
                    case (#Authority) {
                        switch(idCards.get(id)) {
                            case(?idCard) { 
                                sharedCards.delete(idCard.id);
                                return true
                             };
                            case(_) return false;
                        };
                    };
                    case (#Government) {
                        switch(idCards.get(id)) {
                            case(?idCard) { 
                                sharedCards.delete(idCard.id);
                                return true
                             };
                            case(_) return false;
                        };
                    };
                    case (_) return false;
                };
            };
            case (null) return false;
        }
  };

    // Function to verify id card
    public shared(msg) func verifyId(id: Principal) : async Bool {
    switch (users.get(msg.caller)) {
            case (?user) {
                switch (user.role) {
                    case (#Authority) {
                        switch(idCards.get(id)) {
                            case(?idCard) {
                                if (idCard.id == id){
                                    if(idCard.terms_and_conditions == true)
                                    {return true;}
                                    else{return false;}
                                    } else {return false};
                             };
                            case(_) return false;
                        };
                    };
                    case (#Government) {
                        switch(idCards.get(id)) {
                            case(?idCard) { 
                               if (idCard.id == id){
                                    if(idCard.terms_and_conditions == true)
                                    {return true;}
                                    else{return false;}
                                    } else {return false};
                             };
                            case(_) return false;
                        };
                    };
                    case (_) return false;
                };
            };
            case (null) return false;
        }
  };
};