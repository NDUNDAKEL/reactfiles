import App from "./App";
const Footer = ({length}) => {
    const today = new Date();
    const styles={
      backgroundColor:"red",
      color:"pink"

    }
  
    return (
      <footer style={styles}>
        <p>KEliFE BIGEST TECH COMPANY &copy; {today.getFullYear()}</p>
        <h1>{length}</h1>
      </footer>
    );
  };
  
  export default Footer;