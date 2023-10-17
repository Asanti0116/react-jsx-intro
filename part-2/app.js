const App = () => {
    return (
        <div>
            <Tweet username="Asanti1011" name="Abby Santiago" date="05/05/2015" message="Friday can't come soon enough!!"/>
            <Tweet username="Cornelius123" name="Cornelius James" date="09/22/2017" message="Collecing Pokemon cards, is my JAM!"/>
            <Tweet username="ChevyGuy" name="Rick James" date="05/07/2018" message="yeaaaaaBuddy!"/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))