import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { getStudents } from '../service/student'
import StudentItem from '../components/Student/StudentItem'
import { useQuery } from '@tanstack/react-query'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const { token } = useSelector((state) => state.auth)

  const [students, setStudents] = useState([])

  // Use react query to fetch API
  const { data, isSuccess, isPending } = useQuery({
    queryKey: ['students'],
    queryFn: () => getStudents(),
    enabled: !!token,
  })

  useEffect(() => {
    if (isSuccess) {
      setStudents(data)
    }
  }, [data, isSuccess])

  if (!token) {
    return (
      <Row className="mt-4">
        <Col>
          <h1 className="text-center">
            Please login first to get student data!
          </h1>
        </Col>
      </Row>
    )
  }

  if (isPending) {
    return (
      <Row className="mt-4">
        <h1>Loading...</h1>
      </Row>
    )
  }

  return (
    <Row className="mt-4">
      {students.length === 0 ? (
        <h1>Student data is not found!</h1>
      ) : (
        students.map((student) => (
          <StudentItem student={student} key={student?.id} />
        ))
      )}
    </Row>
  )
}
