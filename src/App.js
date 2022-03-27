import React from 'react';
// importing components and container files

// import { Article, Brand, Cta, Feature, Navbar } from './components';
import { Blog, Features, Footer, Header, Possibility, Whatgpt3  } from './containers';
import { Brand, Cta, Navbar } from './components';  


// react function component

const App = () => {
    return (
        <div className="App">
            <div className="gradient_bg">
                <Navbar />
                <Header />

            </div>
            <Brand />  
            <Whatgpt3 />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
            
        </div>
    )
}

export default App
