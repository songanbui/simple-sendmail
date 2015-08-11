# simple-sendmail
A simple nodeJS application to send mail via SMTP

## Description
The simple-sendmail is a basic nodeJS express application to send mail via SMTP using a HTTP POST request.
The content of the mail will be the request body parsed as JSON.

## Configuration
Please first modify config.json to set the SMTP server, TO and FROM mail addresses and the mail subject.

## Installation
First run NPM to install dependencies and modules.

```
npm install
```

Then run the application with the following command:

```
node bin/www
```

## Usage
Send a mail by using the HTTP POST request:
```
http://localhost:3001/sendmail
```
