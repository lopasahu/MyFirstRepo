$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/44744/eclipse-workspace/AmazonAwsBDDFramework/src/main/java/amazonaws/qa/features/addPoliticians.feature");
formatter.feature({
  "line": 1,
  "name": "Create Politician Test",
  "description": "",
  "id": "create-politician-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Validate Politician getting Created",
  "description": "",
  "id": "create-politician-test;validate-politician-getting-created",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User Opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User is on Registation Page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enters the details \"\u003cusername\u003e\" and \"\u003ccountry\u003e\" and \"\u003cdate\u003e\" and \"\u003curl\u003e\" and \"\u003crisktype\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User gets a popup user being added with \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User accepts the popup and close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "create-politician-test;validate-politician-getting-created;",
  "rows": [
    {
      "cells": [
        "username",
        "country",
        "date",
        "url",
        "risktype"
      ],
      "line": 14,
      "id": "create-politician-test;validate-politician-getting-created;;1"
    },
    {
      "cells": [
        "John Doe",
        "UK",
        "02/07/2002",
        "https://www.google.com/",
        "Low"
      ],
      "line": 15,
      "id": "create-politician-test;validate-politician-getting-created;;2"
    },
    {
      "cells": [
        "Lopa",
        "UK",
        "02/07/2002",
        "https://www.google.com/",
        "Low"
      ],
      "line": 16,
      "id": "create-politician-test;validate-politician-getting-created;;3"
    },
    {
      "cells": [
        "John Doe",
        "USA",
        "2002/07/10",
        "https://www.google.com/",
        "Low"
      ],
      "line": 17,
      "id": "create-politician-test;validate-politician-getting-created;;4"
    },
    {
      "cells": [
        "Green",
        "USA",
        "02/07/2002",
        "https://www.google.com/",
        "LARGE"
      ],
      "line": 18,
      "id": "create-politician-test;validate-politician-getting-created;;5"
    },
    {
      "cells": [
        "Yellow",
        "xyz",
        "02/07/2002",
        "www://google.com/",
        "Low"
      ],
      "line": 19,
      "id": "create-politician-test;validate-politician-getting-created;;6"
    },
    {
      "cells": [
        "John Doe",
        "xyz",
        "02/07/2002",
        "www://google.com/",
        "Low"
      ],
      "line": 20,
      "id": "create-politician-test;validate-politician-getting-created;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Validate Politician getting Created",
  "description": "",
  "id": "create-politician-test;validate-politician-getting-created;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User Opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User is on Registation Page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enters the details \"John Doe\" and \"UK\" and \"02/07/2002\" and \"https://www.google.com/\" and \"Low\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User gets a popup user being added with \"John Doe\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User accepts the popup and close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "PoliticianPageSteps.user_Opens_browser()"
});
formatter.result({
  "duration": 7001983400,
  "status": "passed"
});
formatter.match({
  "location": "PoliticianPageSteps.user_is_on_Registation_Page()"
});
formatter.result({
  "duration": 20526900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John Doe",
      "offset": 25
    },
    {
      "val": "UK",
      "offset": 40
    },
    {
      "val": "02/07/2002",
      "offset": 49
    },
    {
      "val": "https://www.google.com/",
      "offset": 66
    },
    {
      "val": "Low",
      "offset": 96
    }
  ],
  "location": "PoliticianPageSteps.user_enters_the_details(String,String,String,String,String)"
});
formatter.result({
  "duration": 1097430200,
  "status": "passed"
});
formatter.match({
  "location": "PoliticianPageSteps.user_clicks_on_Save_button()"
});
formatter.result({
  "duration": 10088654800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John Doe",
      "offset": 41
    }
  ],
  "location": "PoliticianPageSteps.user_gets_a_popup_user_being_added_with(String)"
});
formatter.result({
  "duration": 232126800,
  "status": "passed"
});
formatter.match({
  "location": "PoliticianPageSteps.user_accepts_the_popup_and_close_the_browser()"
});
formatter.result({
  "duration": 694944500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Validate Politician getting Created",
  "description": "",
  "id": "create-politician-test;validate-politician-getting-created;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User Opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User is on Registation Page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enters the details \"Lopa\" and \"UK\" and \"02/07/2002\" and \"https://www.google.com/\" and \"Low\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User gets a popup user being added with \"Lopa\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User accepts the popup and close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "PoliticianPageSteps.user_Opens_browser()"
});
formatter.result({
  "duration": 4590941200,
  "status": "passed"
});
formatter.match({
  "location": "PoliticianPageSteps.user_is_on_Registation_Page()"
});
formatter.result({
  "duration": 11364900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lopa",
      "offset": 25
    },
    {
      "val": "UK",
      "offset": 36
    },
    {
      "val": "02/07/2002",
      "offset": 45
    },
    {
      "val": "https://www.google.com/",
      "offset": 62
    },
    {
      "val": "Low",
      "offset": 92
    }
  ],
  "location": "PoliticianPageSteps.user_enters_the_details(String,String,String,String,String)"
});
formatter.result({
  "duration": 793561800,
  "status": "passed"
});
formatter.match({
  "location": "PoliticianPageSteps.user_clicks_on_Save_button()"
});
formatter.result({
  "duration": 10117389900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lopa",
      "offset": 41
    }
  ],
  "location": "PoliticianPageSteps.user_gets_a_popup_user_being_added_with(String)"
});
formatter.result({
  "duration": 64051400,
  "error_message": "junit.framework.AssertionFailedError: Name Is not saved correctly expected:\u003ctrue\u003e but was:\u003cfalse\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:174)\r\n\tat amazonaws.qa.StepDefinitions.PoliticianPageSteps.user_gets_a_popup_user_being_added_with(PoliticianPageSteps.java:47)\r\n\tat ✽.Then User gets a popup user being added with \"Lopa\"(C:/Users/44744/eclipse-workspace/AmazonAwsBDDFramework/src/main/java/amazonaws/qa/features/addPoliticians.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PoliticianPageSteps.user_accepts_the_popup_and_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "Validate Politician getting Created",
  "description": "",
  "id": "create-politician-test;validate-politician-getting-created;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User Opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User is on Registation Page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enters the details \"John Doe\" and \"USA\" and \"2002/07/10\" and \"https://www.google.com/\" and \"Low\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User gets a popup user being added with \"John Doe\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User accepts the popup and close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "PoliticianPageSteps.user_Opens_browser()"
});
formatter.result({
  "duration": 4672184000,
  "status": "passed"
});
formatter.match({
  "location": "PoliticianPageSteps.user_is_on_Registation_Page()"
});
formatter.result({
  "duration": 10505600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John Doe",
      "offset": 25
    },
    {
      "val": "USA",
      "offset": 40
    },
    {
      "val": "2002/07/10",
      "offset": 50
    },
    {
      "val": "https://www.google.com/",
      "offset": 67
    },
    {
      "val": "Low",
      "offset": 97
    }
  ],
  "location": "PoliticianPageSteps.user_enters_the_details(String,String,String,String,String)"
});
formatter.result({
  "duration": 949399000,
  "error_message": "junit.framework.AssertionFailedError: Input Date format is wrong expected:\u003ctrue\u003e but was:\u003cfalse\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:174)\r\n\tat amazonaws.qa.StepDefinitions.PoliticianPageSteps.user_enters_the_details(PoliticianPageSteps.java:35)\r\n\tat ✽.Then User enters the details \"John Doe\" and \"USA\" and \"2002/07/10\" and \"https://www.google.com/\" and \"Low\"(C:/Users/44744/eclipse-workspace/AmazonAwsBDDFramework/src/main/java/amazonaws/qa/features/addPoliticians.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PoliticianPageSteps.user_clicks_on_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "John Doe",
      "offset": 41
    }
  ],
  "location": "PoliticianPageSteps.user_gets_a_popup_user_being_added_with(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PoliticianPageSteps.user_accepts_the_popup_and_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "Validate Politician getting Created",
  "description": "",
  "id": "create-politician-test;validate-politician-getting-created;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User Opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User is on Registation Page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enters the details \"Green\" and \"USA\" and \"02/07/2002\" and \"https://www.google.com/\" and \"LARGE\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User gets a popup user being added with \"Green\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User accepts the popup and close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "PoliticianPageSteps.user_Opens_browser()"
});
formatter.result({
  "duration": 4515483000,
  "status": "passed"
});
formatter.match({
  "location": "PoliticianPageSteps.user_is_on_Registation_Page()"
});
formatter.result({
  "duration": 8551500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 25
    },
    {
      "val": "USA",
      "offset": 37
    },
    {
      "val": "02/07/2002",
      "offset": 47
    },
    {
      "val": "https://www.google.com/",
      "offset": 64
    },
    {
      "val": "LARGE",
      "offset": 94
    }
  ],
  "location": "PoliticianPageSteps.user_enters_the_details(String,String,String,String,String)"
});
formatter.result({
  "duration": 11157377100,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: LARGE\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-5EQMNKCD\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:151)\r\n\tat amazonaws.qa.pages.CreatePoliticianPage.createPolitician(CreatePoliticianPage.java:72)\r\n\tat amazonaws.qa.StepDefinitions.PoliticianPageSteps.user_enters_the_details(PoliticianPageSteps.java:33)\r\n\tat ✽.Then User enters the details \"Green\" and \"USA\" and \"02/07/2002\" and \"https://www.google.com/\" and \"LARGE\"(C:/Users/44744/eclipse-workspace/AmazonAwsBDDFramework/src/main/java/amazonaws/qa/features/addPoliticians.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PoliticianPageSteps.user_clicks_on_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 41
    }
  ],
  "location": "PoliticianPageSteps.user_gets_a_popup_user_being_added_with(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PoliticianPageSteps.user_accepts_the_popup_and_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "Validate Politician getting Created",
  "description": "",
  "id": "create-politician-test;validate-politician-getting-created;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User Opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User is on Registation Page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enters the details \"Yellow\" and \"xyz\" and \"02/07/2002\" and \"www://google.com/\" and \"Low\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User gets a popup user being added with \"Yellow\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User accepts the popup and close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "PoliticianPageSteps.user_Opens_browser()"
});
formatter.result({
  "duration": 4545275100,
  "status": "passed"
});
formatter.match({
  "location": "PoliticianPageSteps.user_is_on_Registation_Page()"
});
formatter.result({
  "duration": 10383300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yellow",
      "offset": 25
    },
    {
      "val": "xyz",
      "offset": 38
    },
    {
      "val": "02/07/2002",
      "offset": 48
    },
    {
      "val": "www://google.com/",
      "offset": 65
    },
    {
      "val": "Low",
      "offset": 89
    }
  ],
  "location": "PoliticianPageSteps.user_enters_the_details(String,String,String,String,String)"
});
formatter.result({
  "duration": 844136500,
  "status": "passed"
});
formatter.match({
  "location": "PoliticianPageSteps.user_clicks_on_Save_button()"
});
formatter.result({
  "duration": 10143698900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yellow",
      "offset": 41
    }
  ],
  "location": "PoliticianPageSteps.user_gets_a_popup_user_being_added_with(String)"
});
formatter.result({
  "duration": 82598000,
  "error_message": "junit.framework.AssertionFailedError: Name Is not saved correctly expected:\u003ctrue\u003e but was:\u003cfalse\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:174)\r\n\tat amazonaws.qa.StepDefinitions.PoliticianPageSteps.user_gets_a_popup_user_being_added_with(PoliticianPageSteps.java:47)\r\n\tat ✽.Then User gets a popup user being added with \"Yellow\"(C:/Users/44744/eclipse-workspace/AmazonAwsBDDFramework/src/main/java/amazonaws/qa/features/addPoliticians.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PoliticianPageSteps.user_accepts_the_popup_and_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "Validate Politician getting Created",
  "description": "",
  "id": "create-politician-test;validate-politician-getting-created;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User Opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User is on Registation Page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enters the details \"John Doe\" and \"xyz\" and \"02/07/2002\" and \"www://google.com/\" and \"Low\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User gets a popup user being added with \"John Doe\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User accepts the popup and close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "PoliticianPageSteps.user_Opens_browser()"
});
formatter.result({
  "duration": 6317329400,
  "status": "passed"
});
formatter.match({
  "location": "PoliticianPageSteps.user_is_on_Registation_Page()"
});
formatter.result({
  "duration": 9860000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John Doe",
      "offset": 25
    },
    {
      "val": "xyz",
      "offset": 40
    },
    {
      "val": "02/07/2002",
      "offset": 50
    },
    {
      "val": "www://google.com/",
      "offset": 67
    },
    {
      "val": "Low",
      "offset": 91
    }
  ],
  "location": "PoliticianPageSteps.user_enters_the_details(String,String,String,String,String)"
});
formatter.result({
  "duration": 881559300,
  "status": "passed"
});
formatter.match({
  "location": "PoliticianPageSteps.user_clicks_on_Save_button()"
});
formatter.result({
  "duration": 10137708100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John Doe",
      "offset": 41
    }
  ],
  "location": "PoliticianPageSteps.user_gets_a_popup_user_being_added_with(String)"
});
formatter.result({
  "duration": 192808100,
  "status": "passed"
});
formatter.match({
  "location": "PoliticianPageSteps.user_accepts_the_popup_and_close_the_browser()"
});
formatter.result({
  "duration": 727996900,
  "status": "passed"
});
});