interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
 return (
    <header className="container max-w-screen-2xl mx-auto p-4">
        <h1>{ title }</h1>
    </header>
 )
}

export default Header