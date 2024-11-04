import { createLazyFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getStudents } from '../service/student';

export const Route = createLazyFileRoute('/')({
	component: Index,
});

function Index() {
	const { token } = useSelector(state => state.auth);

	const [students, setStudents] = useState([]);

	useEffect(() => {
		const getStudentData = async () => {
			const result = await getStudents();
			if (result.success) {
				setStudents(result.data);
			}
		};

		if (token) {
			getStudentData();
		}
	}, [token]);

	return (
		<Row className="mt-4 g-4">
			{!token && (
				<Col>
					<h1 className="text-center">Please login first to get student data!</h1>
				</Col>
			)}

			{students.length > 0 &&
				students.map(student => (
					<Col key={student.id} md={4}>
						<Card style={{ width: '18rem', height: '100%' }}>
							<Card.Img variant="top" src={student.profile_picture} style={{ height: '280px', objectFit: 'cover' }} />
							<Card.Body>
								<Card.Title>{student?.name}</Card.Title>
								<Card.Text>{student?.nick_name}</Card.Text>
								<Button variant="primary">Detail Student</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
		</Row>
	);
}
