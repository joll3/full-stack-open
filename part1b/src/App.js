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
const Header = (props) => {
  console.log(props)
  return <h1>{props.course.name}</h1>
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>{course.parts[0].name}</p>
      <p>{course.parts[1].name}</p>
      <p>{course.parts[2].name}</p>
      {/* <Part part1={part1}/> */}
      {/* <Part part2={part2}/> */}
      {/* <Part part3={part3}/> */}
    </div>
  )
}

/* const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.part1.name}</p>
      <p>{props.part2.name}</p>
      <p>{props.part3.name}</p>
    </div>
  )
} */

const Total = (props) => {
  console.log(props)
  return (
    <div>
      {
      course.parts[0].exercises + 
      course.parts[1].exercises +
      course.parts[2].exercises
      }
    </div>
  )
}

  return (
    <div>
      <Header course={course}/>
      <Content parts={course} />
      <Total parts={course}/>
    </div>
  )
}

export default App