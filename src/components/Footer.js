const Footer = () => {
  const currentDate=new Date();
  const year=currentDate.getFullYear();
  return (
    <footer className="footer">
        <p className="footer_p">
            Copyright &copy; {year}
        </p>
    </footer>
  )
}

export default Footer