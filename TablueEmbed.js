import TableauReport from 'tableau-react';
import {useLocation} from "react-router-dom";

 

const options = {
    height: 2500,
    width: 2500,
    hideTabs: false,
    // All other vizCreate options are supported here, too
    // They are listed here: https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#ref_head_9
  };
   
  const filters = {
    Colors: ['Blue', 'Red'],
    Sizes: ['Small', 'Medium']
  };
   
  const parameters = {
    Param1: 'value',
    Param2: 'Other Value'
  };
   
 // const refreshSeconds = 60 * 5;


  function Items() {
   const search = useLocation().search;
    const value = new URLSearchParams(search).get('value');
  
    return (
      <div>
        
        <p>{value}</p>
      </div>
    );
  }


  const TablueEmbed = props => (
    <TableauReport
      url='https://public.tableau.com/shared/7FP6TBBMG?:display_count=y&:origin=viz_share_link" &:showVizHome=no"'
      filters={filters}
      parameters={parameters}
      options={options} // vizCreate options
      // Overwrite default query params
      // defaults to '?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes'
      query="?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes"
     // refreshSeconds={refreshSeconds}
    />
  )
   


export default TablueEmbed;
