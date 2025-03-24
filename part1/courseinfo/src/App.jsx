const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const Header = (props) => {
    console.log(props)
    return <h1>{props.course}</h1>
  }

  const Content = (props) => {
    return (
      <div>
        <Part name={props.part1} exercises={exercises1} />
        <Part name={props.part2} exercises={exercises2} />
        <Part name={props.part3} exercises={exercises3} />
      </div>
    )
  }

  const Part = (props) => {
    return (
      <p>
        {props.name} {props.exercises}
      </p>
    )
  }

  const Total = (props) => {
    return (
      <p>
        Number of exercises{" "}
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  )
}

export default App
