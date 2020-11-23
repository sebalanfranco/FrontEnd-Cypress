Feature: Cypress Example page
    In order to learn about Cypress
    As a web page visitor
    I want to be able to browse the exmaple page and execute my tests

    Background: 
        Given user is in the Cypress example page
    
    @category
    Scenario Outline: Redirect to command categories' documentation
        When user clicks on "<command_category>" command category
        Then user should be redirected to "/commands/<command_category>" url
        And user should see the title "<command_category>"
        Examples:
            | command_category |
            | Querying         |
            | Traversal        |
            | Actions          |
            | Window           |
            | Viewport         |
            | Location         |
            | Navigation       |
            | Assertions       |
            | Misc             |

    @command
    Scenario Outline: Redirect to commands' documentation        
        When user clicks on "<command_name>" command in "<command_category>" category
        Then user should be redirected to "/commands/<command_category>" url
        And user should see the title "<command_category>"
        And user should see the subtitle "cy.<command_name>()"
        Examples:
            | command_category | command_name |
            | Querying         | get          |
            | Querying         | contains     |
            | Querying         | within       |
            | Querying         | root         |
            | Location         | hash         |
            | Location         | location     |
            | Location         | url          |
