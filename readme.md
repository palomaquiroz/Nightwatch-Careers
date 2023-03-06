
# NIGHTWATCH AUTOMATION SUITE FOR CAREERS PAGE

This is the automation suite for the Careers page of December Labs webpage.
Framework used was [Nightwatch](https://nightwatchjs.org/).
In this suite, you will find tests for:
* Validating that the "Apply Now!" form opens correctly
* Validating that, when sending the form with mandatory fields in blank, the proper errors are shown
* Validating that the errors are not longer shown when filling the mandatory fields

The environment where this tests are run is the [December Labs Staging Environment](https://inhouse.decemberlabs.com/).

## Pre-requisites

 - [Node.js](https://nodejs.org/en/) should be installed
 - A code editor as [Visual Studio Code](https://code.visualstudio.com/) is recommended

## Run Locally

First of all, clone the project into your local machine

```bash
  git clone https://github.com/palomaquiroz/Nightwatch-Careers
```

Once that is done, go to the project directory

```bash
  cd Nightwatch-Careers
```

Install dependencies running the following comand

```bash
  npm install
```

Run the tests by using

```bash
  npm run test
```

If you want to see the code in your local machine, open it with the following command.
```bash
  code .
```
## Testing Feedback

After creating and running the suite I have a couple of suggestions to improve the quality of the app and the testing process, these are:
* Some validations could be added to the fields in order to check that the information given by the user is the one we are expecting to receive. I noticed that the 'Name' field, for example, takes names that contain numbers, special characters or that are just one character long. At the same time, the 'LinkedIn Profile' field would accept any url, doesn't matter if it's from linkedin or not. The phone field would take letters and special characters as well, and even though it isn't a mandatory field, it would be nice to check that the user is providing a real phone number if they are going to fill that field.
* A message indicating the type of error would be helpful to the user (ex. "Please complete your name", or "Name should be more than 1 character long" if we take the first suggestion).
* Regarding testing, it would be helpful to have test ids in the elements of the page to help the automation process be more smooth, clean and accurate.

## Authors

- [@palomaquiroz](https://github.com/palomaquiroz)

