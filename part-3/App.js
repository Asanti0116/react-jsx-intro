function App() {
    return (
      <div>
        <Person
          name="Abby"
          age={33}
          hobbies={["bowling", "fihing", "gyming", "drinking beer"]}
        />
        <Person name="Margo" age={64} hobbies={["reading", "gambling"]} />
        <Person
          name="Cory"
          age={35}
          hobbies={["skateboarding", "fishing"]}
        />
        <Person
          name="Mike"
          age={74}
          hobbies={["gardening", "motorcyle", "sitting by fires"]}
        />
      </div>
    );
  }