Feature: Delay Rest API

    I want use a Delay Rest API

    @smoke
    Scenario: Make post request with the result from a delay request
        Given make a request to get with delay of 3 seconds
        And make a request to post with response from delay
        Then receive a response code 200
        And receive a response body with data.code "3"
