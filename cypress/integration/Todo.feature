Feature: Todo Rest API

    I want use a Todo Rest API

    @smoke
    Scenario: Finding a Todo
        Given make a request to get a Todo with id 1
        Then receive a response code 200
        And receive a Todo with id 1


    @smoke
    Scenario: Finding a Todo with error
        Given make a request to get a Todo with id 999
        Then receive a response code 404
