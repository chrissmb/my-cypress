Feature: Product Store Page

    I want use a Product Store Page

    @smoke
    Scenario: view login link
        Given visit Product Store Page
        Then should see login link

    @smoke
    Scenario: view login modal
        Given visit Product Store Page
        When click on login link
        Then should see login modal

    @smoke
    Scenario: Log in
        Given visit Product Store Page
        When click on login link
        And type username "chrissmb"
        And type password "teste"
        And click on login button
        Then should see welcome "chrissmb"
