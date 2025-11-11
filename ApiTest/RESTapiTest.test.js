const axios = require("axios");
const validator = require('jsonschema')
const getUserDataSchema = require('../ApiTest/getschema.json');


describe('API Test', function (){
    let userResponse;
    beforeAll(async ()=>{
        userResponse = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities')
    })

    test('Test 1, Positive. GET Activities return status 200', async () => {
        console.log(userResponse)
        await expect(userResponse.status).toEqual(200);
    });

    test('Test 2, Positive. GET Activities return valid response body', async () => {
        const validationResult = await validator.validate(userResponse.data, getUserDataSchema)
        await expect(validationResult.valid).toEqual(true);
        console.log(userResponse)
    });

    test('Test 3, Negative. GET Activities return status 400 when send invalid url', async () => {

        try {
            userResponse = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities333')
        } catch (error) {
            console.log(userResponse)
            userResponse = error.response;
        }
        console.log(userResponse)
        await expect(userResponse.status).toEqual(404);
    });

    test('Test 4, Negative. GET non-existent ID returns 404', async () => {
        try {
            await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities/99996666')
        } catch (error) {
            expect([400, 404]).toContain(error.response.status)
        }
        console.log(userResponse)
    })

    test('Test 5, Negative. GET string ID returns 400', async () => {
        try {
            await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities/hello')
        } catch (error) {
            expect([400, 404]).toContain(error.response.status)
        }
        console.log(userResponse)
    })
})