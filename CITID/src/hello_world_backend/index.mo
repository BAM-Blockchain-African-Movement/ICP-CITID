// import Time "mo:base/Time";
// import HashMap "mo:base/HashMap";
// import Nat "mo:base/Nat";
// import Text "mo:base/Text";
// import Nat64 "mo:base/Nat64";
// // import Hash "mo:base/Hash";
// // import Principal "mo:base/Principal";
// import Result "mo:base/Result";
// import Iter "mo:base/Iter";
// import Random "mo:base/Random";
// import Blob "mo:base/Blob";


// actor NationalIDSystem {

//     // User roles
//     type UserRole = {
//         #Government;
//         #Authority;
//         #Institution;
//         #Citizen;
//     };

//     // User structure
//     type User = {
//         id : Text;
//         role : UserRole;
//         name : Text;
//         email : Text;
//         doc : Text;
//         password : Text;
//         date : Nat64;
//     };

//     // ID card structure
//     type IdCard = {
//         id : Text;
//         name : Text;
//         surname : Text;
//         date_of_birth : Text;
//         place_of_birth : Text;
//         sex : Text;
//         height : Nat;
//         profile : Text;
//         profession : Text;
//         father_name : Text;
//         mother_name : Text;
//         password : Text;
//         signature : Text;
//         terms_and_conditions : Bool;
//         address : Text;
//         division : Text;
//         date_of_issue : Time.Time;
//         date_of_expiry : Time.Time;
//         authority : Text;
//     };

//     type Share = {
//         id : Text;
//         name : Text;
//         surname : Text;
//         date_of_birth : Text;
//         place_of_birth : Text;
//         sex : Text;
//         height : Nat;
//         profile : Text;
//         profession : Text;
//         father_name : Text;
//         mother_name : Text;
//         password : Text;
//         signature : Text;
//         terms_and_conditions : Bool;
//         address : Text;
//         division : Text;
//         date_of_issue : Time.Time;
//         date_of_expiry : Time.Time;
//         authority : Text;
//     };
//   type Usr = {
//         id : Text;
//         nom: Text;
//         prenom: Text;
//         tel: Text;
//         email: Text;
//         address: Text;
//         password: Text;
//         dateInscription: Nat64;
//     };
//     private stable var nextId : Nat = 0;
//     let seed : Blob = "\14\c9\72\09\03\D4\D5\72\82\95\E5\43\AF\FA\A9\44\49\2F\25\56\13\6E\C7\B0\87\DC\76\08\69\14\CF";
//     private var nextUserId: Nat = Random.rangeFrom(32, seed);
//     private var users = HashMap.HashMap<Text, User>(0, Text.equal, Text.hash);
//     private var idCards = HashMap.HashMap<Text, IdCard>(0, Text.equal, Text.hash);
//     private var sharedCards = HashMap.HashMap<Text, Share>(0, Text.equal, Text.hash); // Changed to Share
//     // private var utilisateurs = HashMap.HashMap<Text, Usr>(0,  Text.equal, Text.hash);
//     // Fuction that gets user procedure registration
//       // Fonction pour enregistrer un utilisateur
// //     public func inscription(nom: Text, prenom: Text, tel: Text, email: Text, adresse: Text, password: Text, date: Nat64) : async Result.Result<Text, Text> {
// //        let userId = nextUserId;
// //         nextUserId += 1;
// //        let userId1:Text = "CM" #Nat.toText(userId);
// //         let nouvelUtilisateur : Usr = {
// //             id = userId1;
// //             nom = nom;
// //             prenom = prenom;
// //             tel = tel;
// //             email = email;
// //             address = adresse;
// //             password = password;
// //             dateInscription = date;
// //         };
// //         utilisateurs.put(userId1, nouvelUtilisateur);
// //         #ok(nouvelUtilisateur.id);
// //     };
// //     public func getUserById(userId: Text) : async ?Usr {
// //   return utilisateurs.get(userId);
// // };
//     public  func createUser(
//         role : UserRole,
//         name : Text,
//         email : Text,
//         doc : Text,
//         password : Text,
//         date : Nat64,
//     ) : async Result.Result<Text, Text> {
//         let uid = nextId;
//         nextId += 1;
//         let uid1 : Text = Nat.toText(uid);
//         let user : User = {
//             id = uid1;
//             role = role;
//             name = name;
//             email = email;
//             doc = doc;
//             password = password;
//             date = date;
//         };
//         users.put(user.id, user);
//         #ok(user.id);
//     };

//     // Function that Creates id cards
//     public func createIdCard(
        
//         name : Text,
//         surname : Text,
//         date_of_birth : Text,
//         place_of_birth : Text,
//         sex : Text,
//         height : Nat,
//         profile : Text,
//         profession : Text,
//         father_name : Text,
//         mother_name : Text,
//         password : Text,
//         signature : Text,
//         terms_and_conditions : Bool,
//         address : Text,
//         division : Text,
//         date_of_issue : Time.Time,
//         date_of_expiry : Time.Time,
//         authority : Text,
//         uid : Text
//     ) : async Result.Result<Text, Text> {
//         switch (users.get(uid)) {
//             case (?user) {
//                 switch (user.role) {
//                     case (#Citizen) {
//                         let userId = nextUserId;
//         nextUserId += 1;
//        let userId1:Text = "CM" #Nat.toText(userId);
//                         let idCard : IdCard = {
//                             id = userId1;
//                             name = name;
//                             surname = surname;
//                             date_of_birth = date_of_birth;
//                             place_of_birth = place_of_birth;
//                             sex = sex;
//                             height = height;
//                             profile = profile;
//                             profession = profession;
//                             father_name = father_name;
//                             mother_name = mother_name;
//                             password = password;
//                             signature = signature;
//                             terms_and_conditions = terms_and_conditions;
//                             address = address;
//                             division = division;
//                             date_of_issue = date_of_issue;
//                             date_of_expiry = date_of_expiry;
//                             authority = authority;
//                         };
//                         idCards.put(idCard.id, idCard);
//                         #ok(idCard.id);
//                     };
//                     case (#Authority) {
//                         let userId = nextUserId;
//         nextUserId += 1;
//        let userId1:Text = "CM" #Nat.toText(userId);
//                         let idCard : IdCard = {
//                             id = userId1;
//                             name = name;
//                             surname = surname;
//                             date_of_birth = date_of_birth;
//                             place_of_birth = place_of_birth;
//                             sex = sex;
//                             height = height;
//                             profile = profile;
//                             profession = profession;
//                             father_name = father_name;
//                             mother_name = mother_name;
//                             password = password;
//                             signature = signature;
//                             terms_and_conditions = terms_and_conditions;
//                             address = address;
//                             division = division;
//                             date_of_issue = date_of_issue;
//                             date_of_expiry = date_of_expiry;
//                             authority = authority;
//                         };
//                         idCards.put(idCard.id, idCard);
//                         #ok(idCard.id);
//                     };
//                     case (#Government) {
//                           let userId = nextUserId;
//         nextUserId += 1;
//        let userId1:Text = "CM" #Nat.toText(userId);
//                         let idCard : IdCard = {
//                             id = userId1;
//                             name = name;
//                             surname = surname;
//                             date_of_birth = date_of_birth;
//                             place_of_birth = place_of_birth;
//                             sex = sex;
//                             height = height;
//                             profile = profile;
//                             profession = profession;
//                             father_name = father_name;
//                             mother_name = mother_name;
//                             password = password;
//                             signature = signature;
//                             terms_and_conditions = terms_and_conditions;
//                             address = address;
//                             division = division;
//                             date_of_issue = date_of_issue;
//                             date_of_expiry = date_of_expiry;
//                             authority = authority;
//                         };
//                         idCards.put(idCard.id, idCard);
//                         #ok(idCard.id);
//                     };
//                     case (_) #err("Access denied. Only Citizens, authorities and government can create ID cards.");
//                 };
//             };
//             case (null) #err("User not found.");
//         };
//     };

//     // Function that let user to share id card
//     public func shareIdCard(id : Text, uid : Text) : async Result.Result<Text, Text> {

//         switch (users.get(uid)) {
//             case (?user) {
//                 switch (user.role) {
//                     case (#Citizen) {
//                         switch (idCards.get(id)) {
//                             case (?idCard) {
//                                 let sharedCard : Share = {
//                                     id = idCard.id;
//                                     name = idCard.name;
//                                     surname = idCard.surname;
//                                     date_of_birth = idCard.date_of_birth;
//                                     place_of_birth = idCard.place_of_birth;
//                                     sex = idCard.sex;
//                                     height = idCard.height;
//                                     profile = idCard.profile;
//                                     profession = idCard.profession;
//                                     father_name = idCard.father_name;
//                                     mother_name = idCard.mother_name;
//                                     password = idCard.password;
//                                     signature = idCard.signature;
//                                     terms_and_conditions = idCard.terms_and_conditions;
//                                     address = idCard.address;
//                                     division = idCard.division;
//                                     date_of_issue = idCard.date_of_issue;
//                                     date_of_expiry = idCard.date_of_expiry;
//                                     authority = idCard.authority;
//                                 };
//                                 sharedCards.put(idCard.id, sharedCard); // Store the Share object
//                                 #ok(idCard.id);
//                             };
//                             case (_) #err("Error ID card not found.");
//                         };
//                     };
//                     case (#Authority) {
//                         switch (idCards.get(id)) {
//                             case (?idCard) {
//                                 let sharedCard : Share = {
//                                     id = idCard.id;
//                                     name = idCard.name;
//                                     surname = idCard.surname;
//                                     date_of_birth = idCard.date_of_birth;
//                                     place_of_birth = idCard.place_of_birth;
//                                     sex = idCard.sex;
//                                     height = idCard.height;
//                                     profile = idCard.profile;
//                                     profession = idCard.profession;
//                                     father_name = idCard.father_name;
//                                     mother_name = idCard.mother_name;
//                                     password = idCard.password;
//                                     signature = idCard.signature;
//                                     terms_and_conditions = idCard.terms_and_conditions;
//                                     address = idCard.address;
//                                     division = idCard.division;
//                                     date_of_issue = idCard.date_of_issue;
//                                     date_of_expiry = idCard.date_of_expiry;
//                                     authority = idCard.authority;
//                                 };
//                                 sharedCards.put(idCard.id, sharedCard); // Store the Share object
//                                 #ok(idCard.id);
//                             };
//                             case (_) #err("Error ID card not found.");
//                         };
//                     };
//                     case (#Government) {
//                         switch (idCards.get(id)) {
//                             case (?idCard) {
//                                 let sharedCard : Share = {
//                                     id = idCard.id;
//                                     name = idCard.name;
//                                     surname = idCard.surname;
//                                     date_of_birth = idCard.date_of_birth;
//                                     place_of_birth = idCard.place_of_birth;
//                                     sex = idCard.sex;
//                                     height = idCard.height;
//                                     profile = idCard.profile;
//                                     profession = idCard.profession;
//                                     father_name = idCard.father_name;
//                                     mother_name = idCard.mother_name;
//                                     password = idCard.password;
//                                     signature = idCard.signature;
//                                     terms_and_conditions = idCard.terms_and_conditions;
//                                     address = idCard.address;
//                                     division = idCard.division;
//                                     date_of_issue = idCard.date_of_issue;
//                                     date_of_expiry = idCard.date_of_expiry;
//                                     authority = idCard.authority;
//                                 };
//                                 sharedCards.put(idCard.id, sharedCard); // Store the Share object
//                                 #ok(idCard.id);
//                             };
//                             case (_) #err("Error ID card not found.");
//                         };
//                     };
//                     case (_) #err("Access denied. Only citizens,authorities and government can share ID cards.");
//                 };
//             };
//             case (null) #err("User not found.");
//         };
//     };

//     // Function to get card by id
//     public query func getCard(id : Text) : async ?IdCard {
//         idCards.get(id);
//     };

//     // Function to get all cards
//     public query func getAllCards() : async [IdCard] {
//         Iter.toArray(idCards.vals());
//     };

//     // Function to get all users
//     public query func getUsers() : async [User] {
//         Iter.toArray(users.vals());
//     };

//     // Function to get all shared id cards
//     public query func getSharedIds() : async [Share] {
//         // Changed to Share
//         Iter.toArray(sharedCards.vals());
//     };

//     // Function that permits the user to revoke this / her id from share
//     public  func revokeSharedCard(id : Text, uid: Text) : async Bool {
//         switch (users.get(uid)) {
//             case (?user) {
//                 switch (user.role) {
//                     case (#Citizen) {
//                         switch (idCards.get(id)) {
//                             case (?idCard) {
//                                 sharedCards.delete(idCard.id);
//                                 return true;
//                             };
//                             case (_) return false;
//                         };
//                     };
//                     case (#Authority) {
//                         switch (idCards.get(id)) {
//                             case (?idCard) {
//                                 sharedCards.delete(idCard.id);
//                                 return true;
//                             };
//                             case (_) return false;
//                         };
//                     };
//                     case (#Government) {
//                         switch (idCards.get(id)) {
//                             case (?idCard) {
//                                 sharedCards.delete(idCard.id);
//                                 return true;
//                             };
//                             case (_) return false;
//                         };
//                     };
//                     case (_) return false;
//                 };
//             };
//             case (null) return false;
//         };
//     };

//     // Function to verify id card
//     public  func verifyId(id : Text, uid: Text) : async Bool {
//         switch (users.get(uid)) {
//             case (?user) {
//                 switch (user.role) {
//                     case (#Authority) {
//                         switch (idCards.get(id)) {
//                             case (?idCard) {
//                                 if (idCard.id == id) {
//                                     if (idCard.terms_and_conditions == true) {
//                                         return true;
//                                     } else { return false };
//                                 } else { return false };
//                             };
//                             case (_) return false;
//                         };
//                     };
//                     case (#Government) {
//                         switch (idCards.get(id)) {
//                             case (?idCard) {
//                                 if (idCard.id == id) {
//                                     if (idCard.terms_and_conditions == true) {
//                                         return true;
//                                     } else { return false };
//                                 } else { return false };
//                             };
//                             case (_) return false;
//                         };
//                     };
//                     case (_) return false;
//                 };
//             };
//             case (null) return false;
//         };
//     };

//     // Function to verify user role [login]
//     public  func userRole(uid: Text, email: Text, password:Text) : async Text {
//         switch (users.get(uid)) {
//             case (?user) {
//                 switch (user.role) {
//                     case (#Citizen) {
//                         switch(user.email == email) {
//                             case(true) { 
//                                 switch(user.password == password){
//                                     case(true){
//                                         return "dashboard/citizen";
//                                     };
//                                     case(_){ return "Not authorised"};
//                                 }
//                              };
//                             case(_) { return "Not authorised"};
//                         };
                        
//                     };
//                     case (#Authority) {
//                         switch(user.email == email) {
//                             case(true) { 
//                                 switch(user.password == password){
//                                     case(true){
//                                         return "dashboard/authority";
//                                     };
//                                     case(_){ return "Not authorised"};
//                                 }
//                              };
//                             case(_) { return "Not authorised"};
//                         };
//                     };
//                     case (#Government) {
//                        switch(user.email == email) {
//                             case(true) { 
//                                 switch(user.password == password){
//                                     case(true){
//                                         return "dashboard/government";
//                                     };
//                                     case(_){ return "Not authorised"};
//                                 }
//                              };
//                             case(_) { return "Not authorised"};
//                         };
//                     };
//                     case (_) return ("Access denied. Only citizens,authorities and government have access to this platform");
//                 };
//             };
//             case (null) return ("User not found");
//         };
//     };
// };

// // import Debug "mo:base/Debug";
// // import Principal "mo:base/Principal";
// // import Trie "mo:base/Trie";
// // import HashMap "mo:base/HashMap";
// // import Text "mo:base/Text";



// // actor UserStorage {
// //     type UserData = {
// //     name: Text;
// //     email: Text;
// // };
// //     // A map to store user data keyed by principal
// //     private var userData = HashMap.HashMap<Principal, UserData>(0, Principal.equal, Principal.hash);
    
// //     // A map to store principals keyed by name for reverse lookup
// //     private var nameToPrincipal = HashMap.HashMap<Text, Principal>(0, Text.equal, Text.hash);

// //     // Function to store user data
// //     public func storeUserData(name: Text, email: Text) : async Text {
// //         let caller = Principal.fromActor();
// //         let data: UserData = {
// //             name = name;
// //             email = email;
// //         };

// //         userData.put(caller, data);
// //         nameToPrincipal.put(name, caller); // Store the principal by name
// //         return "User data stored successfully.";
// //     };

// //     // Function to retrieve user data by name
// //     public query func getUserDataByName(name: Text) : async ?UserData {
// //         switch (nameToPrincipal.get(name)) {
// //             case (?principal) {
// //                 return userData.get(principal);
// //             };
// //             case null {
// //                 return null; // Name not found
// //             };
// //         }
// //     };

// //     // Function to retrieve user data by principal
// //     public query func getUserData() : async ?UserData {
// //         let caller = Principal;
// //         switch (userData.get(caller)) {
// //             case (?data) { return ?data; };
// //             case null { return null; }
// //         };
// //     }
// // };
