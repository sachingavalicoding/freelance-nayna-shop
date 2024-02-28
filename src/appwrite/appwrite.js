<<<<<<< HEAD
import { Client , Databases  } from "appwrite";
const client = new Client();
client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("65ddd864afdecbb2c913");

=======
import { Client , Databases  } from "appwrite";
const client = new Client();
client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("65ddd864afdecbb2c913");

>>>>>>> d6c6f0d (dummy site is ready)
export const databases =  new Databases(client);