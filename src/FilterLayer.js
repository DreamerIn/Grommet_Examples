import React, { useState } from "react";
import { Box, Button, Grid, Select, TextInput } from "grommet";
import { ColumnHeaders } from "./testdata";

const filterOptions = {
  HPE_Product_Name: [
    {
      HPE_Product_Name: "HPE product 1",
      ID_HPE_Product_Name: 1
    },
    {
      HPE_Product_Name: "HPE product 2",
      ID_HPE_Product_Name: 2
    },
    {
      HPE_Product_Name: "HPE product 3",
      ID_HPE_Product_Name: 3
    },
    {
      HPE_Product_Name: "HPE product 4",
      ID_HPE_Product_Name: 4
    }
  ]
};

const filterConfig = [
  {
    column1: {
      options: [],
      defaultOptions: [],
      labelKey: "header",
      valueKey: "property",
      value: "",
      search: true,
      multiple: false
    },
    column2: {
      options: [],
      defaultOptions: [],
      value: ""
    },
    column3: {
      options: [],
      defaultOptions: [],
      value: ""
    }
  },
  {
    column1: {
      options: [],
      defaultOptions: [],
      labelKey: "header",
      valueKey: "property",
      value: "",
      search: true,
      multiple: false
    },
    column2: {
      options: [],
      defaultOptions: [],
      value: ""
    },
    column3: {
      options: [],
      defaultOptions: [],
      value: ""
    }
  },
  {
    column1: {
      options: [],
      defaultOptions: [],
      labelKey: "header",
      valueKey: "property",
      value: "",
      search: true,
      multiple: false
    },
    column2: {
      options: [],
      defaultOptions: [],
      value: ""
    },
    column3: {
      options: [],
      defaultOptions: [],
      value: ""
    }
  }
];

const filterOperatorOptions = {
  textinput: [
    {
      filterLabel: "Equal To",
      filterValue: "equalTo"
    },
    {
      filterLabel: "Not Equal To",
      filterValue: "notEqualTo"
    },
    {
      filterLabel: "Starts With",
      filterValue: "startsWith"
    },
    {
      filterLabel: "Ends With",
      filterValue: "endsWith"
    },
    {
      filterLabel: "Substring",
      filterValue: "subString"
    },
    {
      filterLabel: "Contains",
      filterValue: "in"
    }
  ],
  numberInput: [
    {
      filterLabel: "Greater Than",
      filterValue: "greaterThan"
    },
    {
      filterLabel: "Greater Than Equal To",
      filterValue: "greaterThanEqualTo"
    },
    {
      filterLabel: "Less Than",
      filterValue: "lessThan"
    },
    {
      filterLabel: "Less Than Equal To",
      filterValue: "lessThanEqualTo"
    },
    {
      filterLabel: "Equal To",
      filterValue: "equalTo"
    },
    {
      filterLabel: "Not Equal To",
      filterValue: "notEqualTo"
    }
  ],
  dropdown: [
    {
      filterLabel: "Equal To",
      filterValue: "equalTo"
    },
    {
      filterLabel: "Not Equal To",
      filterValue: "notEqualTo"
    },
    {
      filterLabel: "Contains",
      filterValue: "in"
    }
  ],
  booleandropdown: [
    {
      filterLabel: "Equal To",
      filterValue: "equalTo"
    },
    {
      filterLabel: "Not Equal To",
      filterValue: "notEqualTo"
    }
  ],
  searchdropdown: [
    {
      filterLabel: "Equal To",
      filterValue: "equalTo"
    },
    {
      filterLabel: "Not Equal To",
      filterValue: "notEqualTo"
    },
    {
      filterLabel: "Starts With",
      filterValue: "startsWith"
    },
    {
      filterLabel: "Ends With",
      filterValue: "endsWith"
    },
    {
      filterLabel: "Substring",
      filterValue: "subString"
    },
    {
      filterLabel: "Contains",
      filterValue: "in"
    }
  ],
  dateinput: [
    {
      filterLabel: "Between",
      filterValue: "between"
    }
  ]
};

export const FilterLayer = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [filtersSettings, setFilterSettings] = useState([...filterConfig]);

  const generateOtherColumnOptions = (selectedOption, index) => {
    let samplefilterSettings = [...filtersSettings];
    let column2Value = samplefilterSettings[index]["column2"];
    let column3Value = samplefilterSettings[index]["column3"];

    let column2Options =
      (selectedOption &&
        filterOperatorOptions[selectedOption["filter"]["type"]]) ||
      [];
    let column3Options =
      (selectedOption && filterOptions[selectedOption["property"]]) || [];
    samplefilterSettings[index]["column2"] = {
      ...column2Value,
      options: column2Options,
      defaultOptions: column2Options
    };

    samplefilterSettings[index]["column3"] = {
      ...column3Value,
      options: column3Options,
      defaultOptions: column3Options
    };
    setFilterSettings(samplefilterSettings);
  };

  const addFilter = () => {
    let selectedHeaders = selectedOptions.map(
      (option) => option["column1"]["header"]
    );
    let remainingColumnHeaders = ColumnHeaders.filter(
      (v) => selectedHeaders.indexOf(v.header) === -1
    );
    const modifiedFilterConfig = [
      {
        ...filterConfig[0],
        column1: {
          options: remainingColumnHeaders,
          defaultOptions: remainingColumnHeaders,
          labelKey: "header",
          valueKey: "property",
          value: "",
          search: true,
          multiple: false
        }
      }
    ];
    const newFilterSettings = [...filtersSettings, ...modifiedFilterConfig];
    setFilterSettings(newFilterSettings);
  };

  const applyFilter = () => {
    console.log("Selected Options", selectedOptions);
  };

  return (
    <Box>
      <Box width="small" margin="medium">
        <Button label="Add Filter" onClick={addFilter} />
      </Box>

      <Grid columns={["small", "small", "small", "small"]} gap="small">
        {filtersSettings.map((config, index) => {
          let column1settings = config["column1"];
          let selectedHeaders = [];
          selectedOptions.forEach((val) => {
            if (val && val["column1"])
              selectedHeaders.push(val["column1"]["header"]);
          });
          column1settings.defaultOptions = ColumnHeaders.filter((v) => {
            return (
              selectedHeaders.indexOf(v.header) === -1 ||
              (typeof selectedOptions[index] !== "undefined" &&
                selectedOptions[index]["column1"]["header"] === v.header)
            );
          });
          column1settings.options = (column1settings.options.length &&
            column1settings.options.length <
              column1settings.defaultOptions.length &&
            column1settings.options) || [...column1settings.defaultOptions];

          let column2settings = config["column2"];
          let column3settings = config["column3"];

          let selectedValues =
            (typeof selectedOptions[index] !== "undefined" &&
              selectedOptions[index]["column1"]) ||
            [];
          return (
            <>
              <Box
                width="100%"
                direction="row-responsive"
                key={`column1-${index}`}
              >
                <Select
                  placeholder={`Select ${column1settings.labelKey}`}
                  labelKey={column1settings.labelKey}
                  valueKey={column1settings.valueKey}
                  options={column1settings.options || []}
                  defaultOptions={column1settings.defaultOptions || []}
                  onChange={({ option }) => {
                    console.log("Selected options", option);
                    generateOtherColumnOptions(option, index);
                    let sampleSelectedOptions = [...selectedOptions];

                    sampleSelectedOptions[index] = {
                      ...sampleSelectedOptions[index],
                      column1: option
                    };

                    setSelectedOptions(sampleSelectedOptions);
                  }}
                  value={
                    (typeof selectedOptions[index] !== "undefined" &&
                      selectedOptions[index]["column1"]) ||
                    ""
                  }
                  onSearch={(text) => {
                    const escapedText = text.replace(
                      /[-\\^$*+?.()|[\]{}]/g,
                      "\\$&"
                    );
                    const exp = new RegExp(escapedText, "i");
                    let cloneFilterSettings = [...filtersSettings];

                    cloneFilterSettings[index]["column1"] = {
                      ...cloneFilterSettings[index]["column1"],
                      options: column1settings.defaultOptions.filter((o) =>
                        exp.test(o.header)
                      )
                    };
                    setFilterSettings(cloneFilterSettings);
                  }}
                  onClose={() => {
                    let cloneFilterSettings = [...filtersSettings];
                    cloneFilterSettings[index]["column1"] = {
                      ...cloneFilterSettings[index]["column1"],
                      options: column1settings.defaultOptions
                    };
                    setFilterSettings(cloneFilterSettings);
                  }}
                />
              </Box>
              {config["column2"] && (
                <Box
                  width="100%"
                  direction="row-responsive"
                  key={`column2-${index}`}
                >
                  <Select
                    labelKey="filterLabel"
                    valueKey="filterValue"
                    options={column2settings.options || []}
                    defaultOptions={column2settings.defaultOptions || []}
                    disabled={
                      typeof selectedOptions[index] === "undefined" ||
                      !selectedOptions[index]["column1"]
                    }
                    onChange={({ option }) => {
                      let sampleSelectedOptions = [...selectedOptions];

                      sampleSelectedOptions[index] = {
                        ...sampleSelectedOptions[index],
                        column2: option
                      };
                      setSelectedOptions(sampleSelectedOptions);
                    }}
                    value={
                      (typeof selectedOptions[index] !== "undefined" &&
                        selectedOptions[index]["column2"]) ||
                      column2settings.defaultOptions[0]
                    }
                  />
                </Box>
              )}
              {(selectedValues &&
                selectedValues.filter.type === "searchdropdown" && (
                  <Box width="100%" direction="row-responsive" key={index}>
                    <Select
                      placeholder={`Select ${selectedValues.header || ""}`}
                      options={column3settings.options || []}
                      defaultOptions={column3settings.options || []}
                      valueKey={selectedValues.property}
                      labelKey={selectedValues.property}
                      onChange={({ option }) => {
                        let sampleSelectedOptions = [...selectedOptions];

                        sampleSelectedOptions[index] = {
                          ...sampleSelectedOptions[index],
                          column3: option
                        };
                        setSelectedOptions(sampleSelectedOptions);
                      }}
                      onSearch={({ text }) => {
                        console.log("Searched", text);
                      }}
                      disabled={
                        !typeof selectedOptions[index] === "undefined" ||
                        !selectedOptions[index]["column1"]
                      }
                      value={
                        (typeof selectedOptions[index] !== "undefined" &&
                          selectedOptions[index]["column3"]) ||
                        ""
                      }
                    />
                  </Box>
                )) ||
                ((selectedValues.filter.type === "booleandropdown" ||
                  selectedValues.filter.type === "dropdown") && (
                  <Box
                    width="100%"
                    direction="row-responsive"
                    key={`column3-${index}`}
                  >
                    <Select
                      placeholder={`Select ${selectedValues.header || ""}`}
                      options={column3settings.options || []}
                      defaultOptions={column3settings.options || []}
                      onChange={({ option }) => {
                        let sampleSelectedOptions = [...selectedOptions];
                        sampleSelectedOptions[index] = {
                          ...sampleSelectedOptions[index],
                          column3: option
                        };
                        setSelectedOptions(sampleSelectedOptions);
                      }}
                      onSearch={({ text }) => {
                        console.log("Searched", text);
                      }}
                      disabled={
                        !typeof selectedOptions[index] === "undefined" ||
                        !selectedOptions[index]["column1"]
                      }
                      value={
                        (typeof selectedOptions[index] !== "undefined" &&
                          selectedOptions[index]["column3"]) ||
                        ""
                      }
                    />
                  </Box>
                )) || (
                  <Box width="100%" direction="row-responsive" key={index}>
                    <TextInput
                      placeholder={`Enter ${selectedValues.header || ""}`}
                      onChange={(event) => {
                        let sampleSelectedOptions = [...selectedOptions];
                        sampleSelectedOptions[index] = {
                          ...sampleSelectedOptions[index],
                          column3: { property: event.target.value }
                        };
                        setSelectedOptions(sampleSelectedOptions);
                      }}
                      value={
                        (typeof selectedOptions[index] !== "undefined" &&
                          selectedOptions[index]["column3"] &&
                          selectedOptions[index]["column3"]["property"]) ||
                        ""
                      }
                      disabled={
                        typeof selectedOptions[index] === "undefined" ||
                        !selectedOptions[index]["column1"]
                      }
                    />
                  </Box>
                )}
              <Box>
                <Button
                  primary
                  label="Clear Filter"
                  onClick={() => {
                    let clonedSelectedOptions = [...selectedOptions];
                    if (typeof clonedSelectedOptions[index] !== "undefined") {
                      if (
                        typeof clonedSelectedOptions[index]["column1"] !==
                        "undefined"
                      )
                        clonedSelectedOptions[index]["column1"] = "";
                      if (
                        typeof clonedSelectedOptions[index]["column2"] !==
                        "undefined"
                      )
                        clonedSelectedOptions[index]["column2"] = "";
                      if (
                        typeof clonedSelectedOptions[index]["column3"] !==
                        "undefined"
                      )
                        clonedSelectedOptions[index]["column3"] = "";
                      setSelectedOptions(clonedSelectedOptions);
                    }
                  }}
                />
              </Box>
            </>
          );
        })}
      </Grid>
      <Box width="small" margin="medium">
        <Button label="Apply Filter" onClick={applyFilter} />
      </Box>
    </Box>
  );
};
