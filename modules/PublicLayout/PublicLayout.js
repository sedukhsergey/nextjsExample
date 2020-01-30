import Header from "../Header";
import Footer from '../Footer';

const PublicLayout = (props) => {
    return (
        <div style={{
        }}>
            <div style={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Header />
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flex: 1,
                    background: 'white',
                    boxShadow: '0px 3px 7px #ccc',
                    borderRadius: '6px',
                    margin: '35px 3px',
                    padding: '16px',
                }}>
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PublicLayout;
