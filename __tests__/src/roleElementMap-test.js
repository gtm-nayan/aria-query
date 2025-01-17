import expect from 'expect';
import roleElementMap from '../../src/roleElementMap';

const entriesList = [
  ["article", [{"name": "article"}]],
  ["banner", [{"constraints": ["scoped to the body element"], "name": "header"}]],
  ["blockquote", [{"name": "blockquote"}]],
  ["button", [{"attributes": [{"name": "type", "value": "button"}], "name": "input"}, {"attributes": [{"name": "type", "value": "image"}], "name": "input"}, {"attributes": [{"name": "type", "value": "reset"}], "name": "input"}, {"attributes": [{"name": "type", "value": "submit"}], "name": "input"}, {"name": "button"}]],
  ["caption", [{"name": "caption"}]],
  ["cell", [{"constraints": ["ancestor table element has table role"], "name": "td"}]],
  ["checkbox", [{"attributes": [{"name": "type", "value": "checkbox"}], "name": "input"}]],
  ["code", [{"name": "code"}]],
  ["columnheader", [{"name": "th"}, {"attributes": [{"name": "scope", "value": "col"}], "name": "th"}, {"attributes": [{"name": "scope", "value": "colgroup"}], "name": "th"}]],
  ["combobox", [{"attributes": [{"name": "aria-controls"}, {"name": "list"}, {"name": "type", "value": "email"}], "constraints": ["the aria-controls attribute is set to the same value as the list attribute"], "name": "input"}, {"attributes": [{"name": "aria-controls"}, {"name": "list"}, {"name": "type", "value": "search"}], "constraints": ["the aria-controls attribute is set to the same value as the list attribute"], "name": "input"}, {"attributes": [{"name": "aria-controls"}, {"name": "list"}, {"name": "type", "value": "tel"}], "constraints": ["the aria-controls attribute is set to the same value as the list attribute"], "name": "input"}, {"attributes": [{"name": "aria-controls"}, {"name": "list"}, {"name": "type", "value": "text"}], "constraints": ["the aria-controls attribute is set to the same value as the list attribute"], "name": "input"}, {"attributes": [{"name": "aria-controls"}, {"name": "list"}, {"name": "type", "value": "url"}], "constraints": ["the aria-controls attribute is set to the same value as the list attribute"], "name": "input"}, {"attributes": [{"name": "aria-controls"}, {"name": "list"}, {"name": "type", "value": "url"}], "constraints": ["the aria-controls attribute is set to the same value as the list attribute"], "name": "input"}, {"attributes": [{"name": "multiple"}, {"name": "size"}], "constraints": ["the multiple attribute and the size attribute do not have a value greater than 1"], "name": "select"}]],
  ["complementary", [{"name": "aside"}, {"attributes": [{"name": "aria-label"}], "constraints": ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"], "name": "aside"}, {"attributes": [{"name": "aria-labelledby"}], "constraints": ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"], "name": "aside"}]],
  ["contentinfo", [{"constraints": ["scoped to the body element"], "name": "footer"}]],
  ["definition", [{"name": "dd"}]],
  ["deletion", [{"name": "del"}]],
  ["dialog", [{"name": "dialog"}]],
  ["document", [{"name": "html"}]],
  ["emphasis", [{"name": "em"}]],
  ["figure", [{"name": "figure"}]],
  ["form", [{"attributes": [{"name": "aria-label"}], "name": "form"}, {"attributes": [{"name": "aria-labelledby"}], "name": "form"}, {"attributes": [{"name": "name"}], "name": "form"}]],
  ["generic", [{"name": "a"}, {"name": "area"}, {"name": "aside"}, {"name": "b"}, {"name": "bdo"}, {"name": "body"}, {"name": "data"}, {"name": "div"}, {"constraints": ["scoped to the main element", "scoped to a sectioning content element", "scoped to a sectioning root element other than body"], "name": "footer"}, {"constraints": ["scoped to the main element", "scoped to a sectioning content element", "scoped to a sectioning root element other than body"], "name": "header"}, {"name": "hgroup"}, {"name": "i"}, {"name": "pre"}, {"name": "q"}, {"name": "samp"}, {"name": "section"}, {"name": "small"}, {"name": "span"}, {"name": "u"}]],
  ["grid", [{"attributes": [{"name": "role", "value": "grid"}], "name": "table"}]],
  ["gridcell", [{"constraints": ["ancestor table element has grid role"], "name": "td"}]],
  ["group", [{"name": "details"}, {"name": "fieldset"}, {"name": "optgroup"}, {"name": "address"}]],
  ["heading", [{"name": "h1"}, {"name": "h2"}, {"name": "h3"}, {"name": "h4"}, {"name": "h5"}, {"name": "h6"}]],
  ["img", [{"name": "img"}]],
  ["insertion", [{"name": "ins"}]],
  ["link", [{"attributes": [{"name": "href"}], "name": "a"}, {"attributes": [{"name": "href"}], "name": "area"}]],
  ["list", [{"name": "menu"}, {"name": "ol"}, {"name": "ul"}]],
  ["listbox", [{"attributes": [{"name": "size"}, {"name": "multiple"}], "constraints": ["the size attribute value is greater than 1"], "name": "select"}, {"attributes": [{"name": "size"}], "constraints": ["the size attribute value is greater than 1"], "name": "select"}, {"attributes": [{"name": "multiple"}], "constraints": ["the multiple attribute value is greater than 1"], "name": "select"}, {"attributes": [{"name": "aria-multiselectable", "value": "true"}], "constraints": ["the datalist selection model allows multiple option elements to be selected at a time"], "name": "datalist"}, {"attributes": [{"name": "aria-multiselectable", "value": "false"}], "name": "datalist"}]],
  ["listitem", [{"constraints": ["direct descendant of ol", "direct descendant of ul", "direct descendant of menu"], "name": "li"}]],
  ["main", [{"name": "main"}]],
  ["mark", [{"name": "mark"}]],
  ["math", [{"name": "math"}]],
  ["meter", [{"name": "meter"}]],
  ["navigation", [{"name": "nav"}]],
  ["option", [{"name": "option"}]],
  ["paragraph", [{"name": "p"}]],
  ["presentation", [{"attributes": [{"name": "alt", "value": ""}], "name": "img"}]],
  ["progressbar", [{"name": "progress"}, {"attributes": [{"name": "aria-valuemax"}, {"name": "aria-valuemin", "value": 0}, {"name": "aria-valuenow"}], "constraints": ["the progress bar is determinate"], "name": "progress"}]],
  ["radio", [{"attributes": [{"name": "type", "value": "radio"}], "name": "input"}]],
  ["region", [{"attributes": [{"name": "aria-label"}], "name": "section"}, {"attributes": [{"name": "aria-labelledby"}], "name": "section"}]],
  ["row", [{"name": "tr"}]],
  ["rowgroup", [{"name": "tbody"}, {"name": "tfoot"}, {"name": "thead"}]],
  ["rowheader", [{"attributes": [{"name": "scope", "value": "row"}], "name": "th"}, {"attributes": [{"name": "scope", "value": "rowgroup"}], "name": "th"}]],
  ["section", [{"attributes": [{"name": "aria-label"}], "name": "section"}, {"attributes": [{"name": "aria-labelledby"}], "name": "section"}]],
  ["searchbox", [{"attributes": [{"name": "list"}, {"name": "type", "value": "search"}], "constraints": ["the list attribute is not set"], "name": "input"}]],
  ["separator", [{"name": "hr"}]],
  ["slider", [{"attributes": [{"name": "type", "value": "range"}], "name": "input"}]],
  ["spinbutton", [{"attributes": [{"name": "type", "value": "number"}], "name": "input"}]],
  ["status", [{"name": "output"}]],
  ["strong", [{"name": "strong"}]],
  ["subscript", [{"name": "sub"}]],
  ["superscript", [{"name": "sup"}]],
  ["switch", [{"attributes": [{"name": "aria-checked"}], "name": "button"}]],
  ["table", [{"name": "table"}]],
  ["term", [{"name": "dfn"}, {"name": "dt"}]],
  ["textbox", [{"constraints": ["the list attribute is not set"], "name": "input"}, {"attributes": [{"name": "type", "value": "email"}], "constraints": ["the list attribute is not set"], "name": "input"}, {"attributes": [{"name": "type", "value": "tel"}], "constraints": ["the list attribute is not set"], "name": "input"}, {"attributes": [{"name": "type", "value": "text"}], "constraints": ["the list attribute is not set"], "name": "input"}, {"attributes": [{"name": "type", "value": "url"}], "constraints": ["the list attribute is not set"], "name": "input"}, {"name": "textarea"}]],
  ["time", [{"name": "time"}]],
];

describe('roleElementMap API', function () {
  describe('entries()', function () {
    test.each(roleElementMap.entries())(`Testing role: '%s' with element %o`, (role, elements) => {
      expect(entriesList).toEqual(
        expect.arrayContaining([[role, elements]]),
      );
    });
    test.each([...roleElementMap.entries()])(`Testing role: '%s'`, (role, elements) => {
      expect(entriesList).toEqual(
        expect.arrayContaining([[role, elements]]),
      );
    });
  });
  describe('forEach()', function () {
    const output = [];
    let context;
    roleElementMap.forEach((value, key, map) => {
      output.push([key, value]);
      if (!context) {
        context = map;
      }
    });
    test.each(output)(`Testing role: '%s' with element %O`, (role, elements) => {
      expect(entriesList).toEqual(
        expect.arrayContaining([[role, elements]]),
      );
    });
    test.each(context)(`Testing role: '%s' with element %O`, (role, elements) => {
      expect(entriesList).toEqual(
        expect.arrayContaining([[role, elements]]),
      );
    });
  });
  it('get()', function () {
    expect(roleElementMap.get('button')).toEqual(
      expect.arrayContaining([
        {"attributes": [{"name": "type", "value": "button"}], "name": "input"},
        {"attributes": [{"name": "type", "value": "image"}], "name": "input"},
        {"attributes": [{"name": "type", "value": "reset"}], "name": "input"},
        {"attributes": [{"name": "type", "value": "submit"}], "name": "input"},
        {"name": "button"}
      ]),
    );
    expect(roleElementMap.get('fake role')).toBeUndefined();
  });
  it('has()', function () {
    expect(roleElementMap.has('button')).toEqual(true);
    expect(roleElementMap.has('fake role')).toEqual(false);
  });
  describe('keys()', function () {
    const entriesKeys = entriesList.map(entry => entry[0]);
    test.each(roleElementMap.keys())('Testing key: %o', (key) => {
      expect(entriesKeys).toEqual(
        expect.arrayContaining([key]),
      );
    });
    test.each([...roleElementMap.keys()])('Testing key: %o', (key) => {
      expect(entriesKeys).toEqual(
        expect.arrayContaining([key]),
      );
    });
  });
  describe('values()', function () {
    const entriesValues = entriesList.map(entry => entry[1]);
    test.each(roleElementMap.values().map(value => [value]))('Testing value: %o', (value) => {
      expect(entriesValues).toEqual(
        expect.arrayContaining([value]),
      );
    });
    test.each([...roleElementMap.values()].map(value => [value]))('Testing value: %o', (value) => {
      expect(entriesValues).toEqual(
        expect.arrayContaining([value]),
      );
    });
  });
});

describe('roleElementMap', function () {
  describe('iteration', function () {
    it('should have an iterator defined', function () {
      expect(roleElementMap[Symbol.iterator]).not.toBeUndefined();
    });
    describe('spread operator', function () {
      it('should have a specific length', function () {
        expect([...roleElementMap].length).toEqual(57);
      });
      test.each([...roleElementMap])('Testing element: %o', (obj, roles) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[obj, roles]]),
        );
      });
    });
    describe('for..of pattern', function () {
      const output = [];
      for (const [key, value] of roleElementMap) {
        output.push([key, value]);
      }
      test.each(output)('Testing element: %o', (obj, roles) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[obj, roles]]),
        );
      });
    });
  });
});
