export default {
  editor: {
    label: {
      en: "My Table Component", // Label for the component in the WeWeb editor
    },
  },
  properties: {
    data: {
      label: {
        en: "Data Source", // Label for the property in the editor
      },
      type: "Array", // Type of property (in this case, an array of data)
      defaultValue: [], // Default value if not specified
    },
    columns: {
      label: {
        en: "Columns Configuration", // Label for the property in the editor
      },
      type: "Array", // Type of property (array)
      defaultValue: [], // Default value
    },
    // Add more properties as needed for your table component
  },
};
