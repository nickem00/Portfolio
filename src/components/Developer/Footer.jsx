import "../styles/Footer.css"

export default function Footer() {

    return (
        <div className="footer">
            <p>© {new Date().getFullYear()} Nicholas Malm. All rights reserved.</p>
        </div>
    )
}