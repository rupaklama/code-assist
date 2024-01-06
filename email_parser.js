import fs from "fs";
import { MailParser } from "mailparser";

/**
 * Parses an email file and extracts relevant information such as headers and body.
 * @param {string} filePath - The path to the email file.
 */
function parseEmail(filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) throw err;

    let mailparser = new MailParser();

    mailparser.on("headers", headers => {
      console.log("From: ", headers.get("from").text);
      console.log("To: ", headers.get("to").text);
      console.log("Subject: ", headers.get("subject"));
    });

    mailparser.on("data", data => {
      if (data.type === "text") {
        console.log("Body: ", data.text); // prints the text/plain body of the email
      }
    });

    mailparser.write(data);
    mailparser.end();
  });
}

parseEmail("email.eml");
