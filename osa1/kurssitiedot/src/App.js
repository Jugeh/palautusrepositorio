const Header = (props) => {
  return <h1>{props.course}</h1>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const Content = () => {
    return (
      <div>
        {course.parts.map((parts) => (
          <div key={parts.name}>
            <p>{parts.name}: {parts.exercises}</p>
          </div>
        ))}
      </div>
    )
  }
  const Total = () => {
    let summa = 0
    course.parts.forEach(parts => {
      (summa += parts.exercises)
    })     
    return (
      <div>
        <p>{"Number of exercises"}: {summa}</p>
      </div>
    )
  }

  return (
    <div>
      <Header course={course.name} />
      <Content course={course.parts.name}/>
      <Total course={course.parts.exercises} />
    </div>
  )
}
  

export default App