export const ColumnHeaders = [
  {
    header: "HPE Product Name",
    property: "HPE_Product_Name",
    type: "string",
    filter: {
      type: "searchdropdown",
      multiSelect: true,
      searchOptions: true,
      clearOptions: true
    }
  },
  {
    header: "HPE Product Version",
    property: "HPE_Product_Version",
    type: "string",
    filter: {
      type: "textinput"
    }
  },
  {
    header: "Module Name",
    property: "Module_Name",
    type: "string",
    filter: {
      type: "textinput"
    }
  },
  {
    header: "Module Version",
    property: "Module_Version",
    type: "string",
    filter: {
      type: "textinput"
    }
  },
  {
    header: "Module Edition",
    property: "Module_Edition",
    type: "string",
    filter: {
      type: "textinput"
    }
  },

  {
    header: "Organization Name",
    property: "Organization_Name",
    type: "string",
    filter: {
      type: "searchdropdown",
      multiSelect: false,
      searchOptions: true,
      clearOptions: true
    }
  },
  {
    header: "Distribution List",
    property: "Owner_Name",
    type: "string",
    filter: {
      type: "searchdropdown",
      multiSelect: false,
      searchOptions: true,
      clearOptions: true
    }
  },
  {
    header: "Developer Contacts",
    property: "Developer_Contacts",
    filter: {
      type: "textinput"
    }
  },
  {
    header: "Manager Contacts",
    property: "Manager_Contacts",
    filter: {
      type: "textinput"
    }
  },
  {
    header: "Platform Name",
    property: "Platform_Name",
    type: "string",
    filter: {
      type: "searchdropdown",
      multiSelect: false,
      searchOptions: true,
      clearOptions: true
    }
  },
  {
    header: "Platform Version",
    property: "Platform_Version",
    type: "string",
    filter: {
      type: "textinput"
    }
  },
  {
    header: "Platform Edition",
    property: "Platform_Edition",
    type: "string",
    filter: {
      type: "textinput"
    }
  },
  {
    header: "Module Vendor Name",
    property: "Module_Vendor_Name",
    type: "string",
    filter: {
      type: "textinput"
    }
  },
  {
    header: "Description",
    property: "Description",
    type: "string",
    filter: {
      type: "textinput"
    }
  },
  {
    header: "Created Date",
    property: "Date",
    type: "date",
    filter: {
      type: "dateinput"
    }
  },
  {
    header: "Source",
    property: "Source",
    type: "string",
    filter: {
      type: "dropdown",
      multiSelect: true,
      searchOptions: false,
      clearOptions: true
    }
  },
  {
    header: "Feed Subscription",
    property: "Feed_Subscription",
    type: "string",
    filter: {
      type: "dropdown",
      multiSelect: true,
      searchOptions: false,
      clearOptions: true
    }
  },
  {
    header: "Touch",
    property: "Touch",
    type: "boolean",
    filter: {
      type: "booleandropdown",
      multiSelect: false,
      searchOptions: false,
      clearOptions: true
    }
  },
  {
    header: "Compiled in binary",
    property: "isUsed",
    type: "boolean",
    filter: {
      type: "booleandropdown",
      multiSelect: false,
      searchOptions: false,
      clearOptions: true
    }
  },
  {
    header: "Override",
    property: "Override",
    type: "boolean",
    filter: {
      type: "booleandropdown",
      multiSelect: false,
      searchOptions: false,
      clearOptions: true
    }
  },
  {
    header: "Carry Over",
    property: "CarryOver",
    type: "string",
    filter: {
      type: "textinput"
    }
  },
  {
    header: "Previous_ID_HPE_Product",
    property: "Previous_ID_HPE_Product",
    type: "string",
    filter: {
      type: "textinput"
    }
  },
  {
    header: "Previous HPE Product Name",
    property: "Previous_HPE_Product_Name",
    type: "string",
    filter: {
      type: "textinput"
    }
  },
  {
    header: "Previous HPE Product Version",
    property: "Previous_HPE_Product_Version",
    type: "string",
    filter: {
      type: "textinput"
    }
  },
  {
    header: "Is Retired",
    property: "IsRetired",
    type: "boolean",
    filter: {
      type: "booleandropdown",
      multiSelect: false,
      searchOptions: false,
      clearOptions: true
    }
  }
];
