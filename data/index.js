const admin = require('./node_modules/firebase-admin');
const serviceAccount = require("./serviceAccountKey.json");

const data = require("./ccmv4.json");
const collectionKey = "ccmv4"; //name of the collection

admin.initializeApp(
    {
        "type": "service_account",
        "project_id": "csnf-test",
        "private_key_id": "REDACTED",
        "private_key": "REDACTED",
        "client_email": "firebase-adminsdk-29pmj@csnf-test.iam.gserviceaccount.com",
        "client_id": "102607198469895319082",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-29pmj%40csnf-test.iam.gserviceaccount.com"
    }
);

const firestore = admin.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

if (data && (typeof data === "object")) {
    Object.keys(data).forEach(docKey => {
        firestore
        .collection(collectionKey)
        .doc()
        .set(data[docKey])
        .then((res) => {
            console.log("Document " + docKey + " successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    });
}