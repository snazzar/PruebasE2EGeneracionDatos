Feature: Create Post
 
  @user1 @web
  Scenario Outline: As an administrator when I create and publish a post it should be visible from posts page
    Given I log in as administrator
    When I click on element having css selector "a[href="#/posts/"]"
    And I click on element having css selector "a[href="#/editor/post/"]"
    And I enter <postTitle> into input field having css selector "div.gh-koenig-editor-pane > textarea"
    And I enter <postContent> into input field having css selector "div.gh-koenig-editor-pane div[contenteditable=true]"
    And I click on element having css selector "div.gh-publishmenu"
    And I click on element having css selector "button.gh-publishmenu-button"
    And I click on element having css selector "header a[href^="#/posts/"]"
    And I click on element having css selector "div.gh-contentfilter-type"
    And I click on element having css selector "ul > li[data-option-index="2"]"
    Then I should see text <expectedTitle>
    
    Examples:
    | postTitle | postContent | expectedTitle |
    | "" | "" | "(Untitled)" |
    | "Test Post Kraken (No Content)" | "" | "Test Post Kraken (No Content)" |
    | "Test Post Kraken" | "Hello World Kraken" | "Test Post Kraken" |
    | "Test Post Kraken Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long" | "Hello World Kraken Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long" | "Test Post Kraken Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long" |