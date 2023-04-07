import CustomNavBar from "./CustomNavBar";
import Theme from "./Theme";
function Base({title="welcome", children})
{
    return (
      <div className="container m-0 p-0">
        <CustomNavBar />
        <Theme/>
        {children}
        
      </div>
    );
}

export default Base;