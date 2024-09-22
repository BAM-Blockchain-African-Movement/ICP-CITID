// import Time "mo:base/Time";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Nat64 "mo:base/Nat64";
// import Hash "mo:base/Hash";
// import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Iter "mo:base/Iter";
import Random "mo:base/Random";
import Blob "mo:base/Blob";

actor NationalIDSystem {

    // User roles
    // type UserRole = {
    //     #Government;
    //     #Authority;
    //     #Institution;
    //     #Citizen;
    // };

    // User structure
    type User = {
        id : Text;
        role : Text;
        name : Text;
        email : Text;
        doc : Text;
        identifier : Text;
        date : Text;
    };

    // ID card structure
    type IdCard = {
        id : Text;
        name : Text;
        surname : Text;
        date_of_birth : Text;
        place_of_birth : Text;
        sex : Text;
        height : Text;
        profile : Text;
        profession : Text;
        father_name : Text;
        mother_name : Text;
        identifier : Text;
        signature : Text;
        terms_and_conditions : Text;
        address : Text;
        division : Text;
        date_of_issue : Text;
        date_of_expiry : Text;
        authority : Text;
        email : Text;
    };

    type Share = {
        id : Text;
        name : Text;
        surname : Text;
        date_of_birth : Text;
        place_of_birth : Text;
        sex : Text;
        height : Text;
        profile : Text;
        profession : Text;
        father_name : Text;
        mother_name : Text;
        identifier : Text;
        signature : Text;
        terms_and_conditions : Text;
        address : Text;
        division : Text;
        date_of_issue : Text;
        date_of_expiry : Text;
        authority : Text;
    };
    type Usr = {
        id : Text;
        nom : Text;
        prenom : Text;
        tel : Text;
        email : Text;
        address : Text;
        identifier : Text;
        dateInscription : Nat64;
    };
    private stable var nextId : Nat = 0;
    let seed : Blob = "\14\c9\72\09\03\D4\D5\72\82\95\E5\43\AF\FA\A9\44\49\2F\25\56\13\6E\C7\B0\87\DC\76\08\69\14\CF";
    private var nextUserId : Nat = Random.rangeFrom(32, seed);
    private var users = HashMap.HashMap<Text, User>(0, Text.equal, Text.hash);
    private var idCards = HashMap.HashMap<Text, IdCard>(0, Text.equal, Text.hash);
    private var sharedCards = HashMap.HashMap<Text, Share>(0, Text.equal, Text.hash); // Changed to Share

    public func createUser(
        role : Text,
        name : Text,
        email : Text,
        doc : Text,
        identifier : Text,
        date : Text,
    ) : async Result.Result<Text, Text> {
        let uid = nextId;
        nextId += 1;
        let uid1 : Text = Nat.toText(uid);
        let user : User = {
            id = uid1;
            role = role;
            name = name;
            email = email;
            doc = doc;
            identifier = identifier;
            date = date;
        };
        users.put(user.email, user);
        #ok(user.id);
    };

    // Function that Creates id cards
    public func createIdCard(

        name : Text,
        surname : Text,
        date_of_birth : Text,
        place_of_birth : Text,
        sex : Text,
        height : Text,
        profile : Text,
        profession : Text,
        father_name : Text,
        mother_name : Text,
        identifier : Text,
        signature : Text,
        terms_and_conditions : Text,
        address : Text,
        division : Text,
        date_of_issue : Text,
        date_of_expiry : Text,
        authority : Text,
        uid : Text,
    ) : async Result.Result<Text, Text> {
        switch (users.get(uid)) {
            case (?user) {
                switch (user.role) {
                    case ("Citizen") {
                        let userId = nextUserId;
                        nextUserId += 1;
                        let userId1 : Text = "CM" #Nat.toText(userId);
                        let idCard : IdCard = {
                            id = userId1;
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
                            identifier = identifier;
                            signature = signature;
                            terms_and_conditions = terms_and_conditions;
                            address = address;
                            division = division;
                            date_of_issue = date_of_issue;
                            date_of_expiry = date_of_expiry;
                            authority = authority;
                            email = uid;
                        };
                        idCards.put(idCard.identifier, idCard);
                        #ok(idCard.id);
                    };
                    case ("Authority") {
                        let userId = nextUserId;
                        nextUserId += 1;
                        let userId1 : Text = "CM" #Nat.toText(userId);
                        let idCard : IdCard = {
                            id = userId1;
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
                            identifier = identifier;
                            signature = signature;
                            terms_and_conditions = terms_and_conditions;
                            address = address;
                            division = division;
                            date_of_issue = date_of_issue;
                            date_of_expiry = date_of_expiry;
                            authority = authority;
                            email = uid;
                        };
                        idCards.put(idCard.id, idCard);
                        #ok(idCard.id);
                    };
                    case ("Government") {
                        let userId = nextUserId;
                        nextUserId += 1;
                        let userId1 : Text = "CM" #Nat.toText(userId);
                        let idCard : IdCard = {
                            id = userId1;
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
                            identifier = identifier;
                            signature = signature;
                            terms_and_conditions = terms_and_conditions;
                            address = address;
                            division = division;
                            date_of_issue = date_of_issue;
                            date_of_expiry = date_of_expiry;
                            authority = authority;
                            email = uid;
                        };
                        idCards.put(idCard.id, idCard);
                        #ok(idCard.id);
                    };
                    case (_) #err("Access denied. Only Citizens, authorities and government can create ID cards.");
                };
            };
            case (null) #err("User not found.");
        };
    };

    // Function that let user to share id card
    public func shareIdCard(id : Text, uid : Text) : async Result.Result<Text, Text> {

        switch (users.get(uid)) {
            case (?user) {
                switch (user.role) {
                    case ("Citizen") {
                        switch (idCards.get(id)) {
                            case (?idCard) {
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
                                    identifier = idCard.identifier;
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
                            case (_) #err("Error ID card not found.");
                        };
                    };
                    case ("Authority") {
                        switch (idCards.get(id)) {
                            case (?idCard) {
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
                                    identifier = idCard.identifier;
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
                            case (_) #err("Error ID card not found.");
                        };
                    };
                    case ("Government") {
                        switch (idCards.get(id)) {
                            case (?idCard) {
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
                                    identifier = idCard.identifier;
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
                            case (_) #err("Error ID card not found.");
                        };
                    };
                    case (_) #err("Access denied. Only citizens,authorities and government can share ID cards.");
                };
            };
            case (null) #err("User not found.");
        };
    };

    // Function to get card by id
    public query func getCard(id : Text) : async ?IdCard {
        idCards.get(id);
    };                                                                

    // Function to get all cards
    public query func getAllCards(uid : Text) : async [IdCard] {
        switch (users.get(uid)) {
            case (?user) {
                switch (user.role) {
                    case ("Government") {
                        Iter.toArray(idCards.vals());
                    };
                    case (_) { [] };
                };
            };
            case (_) { [] };
        };
    };

    // Function to get all users
    public query func getUsers(uid:Text) : async [User] {
        switch (users.get(uid)) {
            case (?user) {
                switch (user.role) {
                    case ("Government") {
                        Iter.toArray(users.vals());
                    };
                    case (_) { [] };
                };
            };
            case (_) { [] };
        };
        
    };

    // Function to get all shared id cards
    public query func getSharedIds() : async [Share] {
        // Changed to Share
        Iter.toArray(sharedCards.vals());
    };

    // Function that permits the user to revoke his / her id from shared ledger
    public func revokeSharedCard(id : Text, uid : Text) : async Bool {
        switch (users.get(uid)) {
            case (?user) {
                switch (user.role) {
                    case ("Citizen") {
                        switch (idCards.get(id)) {
                            case (?idCard) {
                                sharedCards.delete(idCard.id);
                                return true;
                            };
                            case (_) return false;
                        };
                    };
                    case ("Authority") {
                        switch (idCards.get(id)) {
                            case (?idCard) {
                                sharedCards.delete(idCard.id);
                                return true;
                            };
                            case (_) return false;
                        };
                    };
                    case ("Government") {
                        switch (idCards.get(id)) {
                            case (?idCard) {
                                sharedCards.delete(idCard.id);
                                return true;
                            };
                            case (_) return false;
                        };
                    };
                    case (_) return false;
                };
            };
            case (null) return false;
        };
    };

    // Function to verify id card
    public func verifyId(id : Text, uid : Text) : async Text {
        switch (users.get(uid)) {
            case (?user) {
                switch (user.role) {
                    case ("Authority") {
                        switch (idCards.get(id)) {
                            case (?idCard) {
                                if (idCard.identifier == id) {
                                    if (idCard.terms_and_conditions == "true") {
                                        return ("Authentic Numeric Id, verified OK!");
                                    } else {
                                        return "Terms and conditions not accepted, card is invalid";
                                    };
                                } else { return "Invalid card number" };
                            };
                            case (_) return ("Card not found");
                        };
                    };
                    case ("Government") {
                        switch (idCards.get(id)) {
                            case (?idCard) {
                                if (idCard.id == id) {
                                    if (idCard.terms_and_conditions == "true") {
                                        return ("Authentic Numeric Id, verified OK!");
                                    } else {
                                        return "Terms and conditions not accepted, card is invalid";
                                    };
                                } else { return "Invalid card number" };
                            };
                            case (_) return ("Card not found");
                        };
                    };
                    case (_) return ("This user is not authorised to access this service");
                };
            };
            case (null) return ("User not found");
        };
    };

    // Function to verify user role [login]
    public func userRole(email : Text, identifier : Text) : async Text {
        switch (users.get(email)) {
            case (?user) {
                switch (user.role) {
                    case ("Citizen") {
                        switch (user.email == email) {
                            case (true) {
                                switch (user.identifier == identifier) {
                                    case (true) {
                                        return "dashboard/citizen";
                                    };
                                    case (_) { return "Not authorised" };
                                };
                            };
                            case (_) { return "Not authorised" };
                        };

                    };
                    case ("Authority") {
                        switch (user.email == email) {
                            case (true) {
                                switch (user.identifier == identifier) {
                                    case (true) {
                                        return "dashboard/authority";
                                    };
                                    case (_) { return "Not authorised" };
                                };
                            };
                            case (_) { return "Not authorised" };
                        };
                    };
                    case ("Government") {
                        switch (user.email == email) {
                            case (true) {
                                switch (user.identifier == identifier) {
                                    case (true) {
                                        return "dashboard/government";
                                    };
                                    case (_) { return "Not authorised" };
                                };
                            };
                            case (_) { return "Not authorised" };
                        };
                    };
                    case (_) return ("Access denied. Only citizens,authorities and government have access to this platform");
                };
            };
            case (null) return ("User not found");
        };
    };
};
