const admin = require('./node_modules/firebase-admin');
const serviceAccount = require("./serviceAccountKey.json");

const data = require("./ccmv4.json");
const collectionKey = "ccmv4"; //name of the collection

admin.initializeApp(
    {
        "type": "service_account",
        "project_id": "csnf-test",
        "private_key_id": "1fb927a7e851413de02956c9ec93faf4d6c84749",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCwhRiAWV/jX0xA\nbm0B1fdpR4AmGs3TvUqEf83uaOunuGZMhHh31tjk9P0FZyQnteXMbVejhRpd0tER\nAo/LTB8nthWCxo0W0BnAgQurvqpfFi0b6gVTVFYpQuSnPp3GiRv5Pe9ldG1NGKdy\nTOoLale+fDQ2NGuG5jyhjtaSor972SV5DhkhurDz+Z92uS3KPdvXWTuFhD9tyu6T\nz3842LkI59NHDl9OZpH2YN+QKOU0j3C/e4+4noO4e2Fhgn57uN6VLKv2XqJ5eLek\nx90cKhDrBxVQLN0xqH+keEH+jzH+bCIIzCkwiGPBrcYo+RAXst6v5BebnhcHmq7b\nwVBDZttHAgMBAAECggEALi+M4xw/ahMHtP4PmIDe/NVf8thljWbERhnYjG44Zohp\nf9DTYmu9EV8GivDbNWazC0N6wEa1yOG9oQk+DW/L4QyT4UVJKjRl4IgDQTsggcOg\nJuMa5Jw29RHTGO1Zw9YhExxA9Jc7eAYg3dfBDx6Seb0uvhYGImRAbfcdLn3VwzXz\n9b3/nfnETeHZfbiVSvGJKOdvncaoDveyrTD5wMg9/vkcKqa7KARpmpvKrXHYOiDJ\nmMRFVlmKLgTlbDNpmMTOYZEesyVwgOWpqr2QF1M3y7i2K8LPKgo/8pivr7icRJuP\nbj2VrBUspv7hE5ELgAWuOpUQNWGdd+9nwe+SeCez3QKBgQD0TUizcceQntDJub2t\nXDbDptCcE16nQp3UcsaS36bhes7ao0u5zfgp41LFbZFiT9cUYGUytVR/b4HGv4fO\nr2IP/TuxG7Cb1TIDwcAFTu5/cuDarnRTmf4YhD9Aj7+0rpF+hoMEqhkxBu96rFr9\n1hjtSFXCpLkapKSUmRf8PsoUCwKBgQC4+OwrseKBfYDtVTkGa3ZiIqAolzRqCQla\nCwEhh7jOXOWAHJO/vmEcNf+nWu9FRAdNtca4swQjxwtVXAArNV47aj4lOh7jnro7\nZsVOPrDQSQR30eAlX9a+NfFbD+4xFlGzAEQsKptJzr+Em2hFyomdMwuZZrAIsANm\n1cjgDSY/NQKBgQDXWVDerUtHVlehmpNyv7iemuuEySZEtlo+LbaRPYjzdbflztAv\nxzocYoBR/BWN3ecv1REfs+v6MabqNWdXcA43HfiCVHBHzZS67w1/IGbn/bHr0qBE\nGZh8sAa5uH06ni8uow/XCsIOD5kGP+wtmY57i6ndXCq3K67QNmuINSkYpQKBgGMW\n1k3CCXkc5og9c0MBJnYD3pBgD/ANzzixVHXF4zaJhVhP9sZtElCujLn2eN8+RjtW\n+ZHQNJOF+YhMtLpw6H4juA7xR8LgMRvJPkFgTBAITaByigT7hmp3M0h5DDy3nCSs\nK9kNKgsr+mTra7yXd4kC41/WJs9Am1HnjKiZ4rdRAoGASmbO3KW+Ybmyv+MJ/UGi\nCVFrXlRgYfEyEc44Ignsy9HYgQnzc4hf2u2XS/7QZ7luNOlPcr0AAsFDiAOwYvZ4\nVDAwSfPsU9sFd8GTfyB4QbMIZpldEH3zE0SMdnxAakNQ8Yl5+X9hkEuckV274/IS\ntMfY6FuZzLzD8nUqNBODSgI=\n-----END PRIVATE KEY-----\n",
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