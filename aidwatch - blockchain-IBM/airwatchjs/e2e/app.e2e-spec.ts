/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for airwatchjs', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be airwatchjs', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('airwatchjs');
    })
  });

  it('network-name should be aidwatch@0.0.1',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('aidwatch@0.0.1.bna');
    });
  });

  it('navbar-brand should be airwatchjs',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('airwatchjs');
    });
  });

  
    it('ReliefAsset component should be loadable',() => {
      page.navigateTo('/ReliefAsset');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('ReliefAsset');
      });
    });

    it('ReliefAsset table should have 5 columns',() => {
      page.navigateTo('/ReliefAsset');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('LocalWHAdmin component should be loadable',() => {
      page.navigateTo('/LocalWHAdmin');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('LocalWHAdmin');
      });
    });

    it('LocalWHAdmin table should have 5 columns',() => {
      page.navigateTo('/LocalWHAdmin');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  
    it('InternationalWHAdmin component should be loadable',() => {
      page.navigateTo('/InternationalWHAdmin');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('InternationalWHAdmin');
      });
    });

    it('InternationalWHAdmin table should have 5 columns',() => {
      page.navigateTo('/InternationalWHAdmin');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  
    it('DistPointAdmin component should be loadable',() => {
      page.navigateTo('/DistPointAdmin');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('DistPointAdmin');
      });
    });

    it('DistPointAdmin table should have 5 columns',() => {
      page.navigateTo('/DistPointAdmin');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  
    it('CampAdmin component should be loadable',() => {
      page.navigateTo('/CampAdmin');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('CampAdmin');
      });
    });

    it('CampAdmin table should have 5 columns',() => {
      page.navigateTo('/CampAdmin');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  
    it('Refugee component should be loadable',() => {
      page.navigateTo('/Refugee');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Refugee');
      });
    });

    it('Refugee table should have 5 columns',() => {
      page.navigateTo('/Refugee');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('ReliefTransaction component should be loadable',() => {
      page.navigateTo('/ReliefTransaction');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('ReliefTransaction');
      });
    });
  

});