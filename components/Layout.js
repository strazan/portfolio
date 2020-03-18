const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <main>{children}</main>
      <style jsx>{`
        .Layout {
          background-color: #145;
        }
      `}</style>
    </div>
  )
}

export default Layout
