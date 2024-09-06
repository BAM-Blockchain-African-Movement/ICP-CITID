import Time "mo:base/Time";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Int "mo:base/Int";
import Nat64 "mo:base/Nat64";

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
        id : Int;
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
        demandor: [User];
    };

    type SharedId = {
        id : Text;
        profile : Text;
        cards : [IdCard];
    };

    // Function to generate ID
    func generateId() : Int {
        let now = Time.now();
        let id = (now % 1000000000); // Get the last 9 digits of the current time
        return id;
    };

    let i : Nat = 0;
    func generateCount() : Text {
        return Nat.toText(i +1);
    };

    // Mappings
    private var users : HashMap.HashMap<Text, User> = HashMap.HashMap<Text, User>(10, Text.equal, Text.hash);
    private var idCards : HashMap.HashMap<Int, IdCard> = HashMap.HashMap<Int, IdCard>(10, Int.equal, Int.hash);
    private var sharedID : HashMap.HashMap<Text, SharedId> = HashMap.HashMap<Text, SharedId>(10, Text.equal, Text.hash);

    // Register procedure [create user]
    public func registerUser(name : Text, email : Text, password : Text, date : Nat64) : async () {
        let user : User = {
            role = #Citizen;
            name = name;
            email = email;
            doc = "Birth Certificate";
            password = password;
            date = date;
        };
        users.put(name, user);
    };

    // Create ID card | Register an ID card
    public func createIdCard(
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
    ) : async () {
        switch (users.get(profile)) {
            case (?userCitizen) {
                let idCard : IdCard = {
                    id = generateId();
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
                    date_of_issue = Time.now();
                    date_of_expiry = Time.now() + (10 * 365 * 24 * 60 * 60 * 1_000_000_000); // 10 years in nanoseconds
                    authority = "";
                    demandor = [userCitizen]
                };
                idCards.put(idCard.id, idCard);
            };
            case (_) { /* User does not exist */ };
        };
    };

    // Get ID card function
    public func getIdCard(myId : Int) : async ?IdCard {
        return idCards.get(myId);
    };

    // Function to grant access to my ID
    public func grantIdAccess(profile : Text, id : Int) : async () {
        
                switch (idCards.get(id)) {
                    case (?idCard) {
                        let sharedList : SharedId = {
                            id = generateCount();
                            profile = profile;
                            cards = [idCard];
                        };
                        sharedID.put(sharedList.id, sharedList);
                    };
                    case (_) {};
                };

           
    };

    // function to view shared cards
    public func getSharedId(id : Text) : async ?SharedId {
        return sharedID.get(id);
    };

    // function to get verify card identifier
    public func verifyIdentifier(cardId : Int) : async ?Int {
        switch (idCards.get(cardId)) {
            case (?idCard) {
                return ?idCard.id;
            };
            case (_) {
                return null;
            };
        };
    };
};