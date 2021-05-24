Feature: Edit Post
 
  @user1 @web
  Scenario Outline: As an administrator when I create, publish and update a post it should be visible from posts page with latest changes
    Given I log in as administrator
    And I click on element having css selector "a[href="#/posts/"]"
    And I click on element having css selector "a[href="#/editor/post/"]"
    And I enter <originalPostTitle> into input field having css selector "div.gh-koenig-editor-pane > textarea"
    And I enter <originalPostContent> into input field having css selector "div.gh-koenig-editor-pane div[contenteditable=true]"
    And I click on element having css selector "div.gh-publishmenu"
    And I click on element having css selector "button.gh-publishmenu-button"
    And I click on element having css selector "header a[href^="#/posts/"]"
    When I click on element having css selector "div.gh-contentfilter-type"
    And I click on element having css selector "ul > li[data-option-index="2"]"
    And I click on element containing <expectedPostTitle>
    And I clear input field having css selector "div.gh-koenig-editor-pane > textarea"
    And I enter <updatedPostTitle> into input field having css selector "div.gh-koenig-editor-pane > textarea"
    And I clear input field having css selector "div.gh-koenig-editor-pane div[contenteditable=true]"
    And I enter <updatedPostContent> into input field having css selector "div.gh-koenig-editor-pane div[contenteditable=true]"
    And I click on element having css selector "div.gh-publishmenu"
    And I click on element having css selector "button.gh-publishmenu-button"
    And I click on element having css selector "header a[href^="#/posts/"]"
    Then I should see text <updatedPostTitle>
    
    Examples:
    | originalPostTitle | originalPostContent | expectedPostTitle | updatedPostTitle | updatedPostContent |
    | "" | "" | "(Untitled)" | "Updated" | "Updated" |
    | "Test Post Kraken (No Content)" | "" | "Test Post Kraken (No Content)" | "Test Post Kraken (No Content) - Updated" | "Updated" |
    | "Test Post Kraken" | "Hello World Kraken" | "Test Post Kraken" | "Test Post Kraken - Updated" | "Hello World Kraken - Updated" |
    | "Test Post Kraken Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long" | "Hello World Kraken Draft Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long" | "Test Post Kraken Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long" | "Test Post Kraken Draft Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long - Updated" | "Hello World Kraken Draft Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long - Updated" |