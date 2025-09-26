const Part = (props) => <p>{props.part.name} {props.part.exercises}</p>

const Total = (props) => {
  const total = props.parts.reduce((sum, part) => sum + part.exercises, 0)
  return <p><strong>total of {total} exercises</strong></p>
}

const Content = (props) => {
  return (
    <div>
      {props.course.parts.map(part => 
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}

const Header = (props) => <h2>{props.course.name}</h2>

const Course = (props) => {
  return (
    <div>
      <Header course={props.course} />
      <Content course={props.course} />
      <Total parts={props.course.parts} />
    </div>
  )
}

export default Course