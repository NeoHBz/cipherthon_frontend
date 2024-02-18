import { Box, Grid, Heading } from "@chakra-ui/react";
import { CustomCard } from "../../Components/BlogCard";
import AppointmentCard from "../../Components/AptCard";
import { PatientDetailsCard } from "../../Components/PatientDetailsCard";
import { useGetPatientQuery } from "../../api/patient";
import { useNavigate } from "react-router-dom";

const cardColor: string[] = ["#ffdc73", "#b6e8de", "#b2e5ff", "#fe9dad", "#f5bace"];
const blogs = [
    {
        title: "Unlocking the Power of Balanced Diets",
        description:
            "Discover how balanced diets play a pivotal role in maintaining optimal health.",
    },
    {
        title: "Revolutionize Your Skincare Routine",
        description:
            "Explore the latest skincare trends and expert tips for achieving radiant and healthy skin.",
    },
    {
        title: "The Importance of Mental Well-being",
        description:
            "Delve into strategies for enhancing mental well-being and managing stress effectively",
    },
    {
        title: "Fitness Fundamentals: A Beginner's Guide",
        description:
            "Embark on a journey to fitness with our comprehensive beginner's guide.",
    },
];

export const PatientDashboard = () => {
    const navigate = useNavigate(); 

  
    const { data: patientData } = useGetPatientQuery("patient@gmail.com");
    return (
        <Box>
            <Box>
                <Heading size="lg" mb="6">
                    Appointments
                </Heading>
                {/* previous, upcoming, patient card  */}
                <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                    <AppointmentCard
                        {...{
                            date: new Date().toISOString().split("T")[0],
                            time: "10:00 AM",
                            hospitalName: "Medisure",
                            doctorName: "Dr. Amit Bindra",
                            isNext: false,
                        }}
                        bgColor={cardColor[cardColor.length - 4]}
                    />
                    <AppointmentCard
                        {...{
                            date: "2024-02-22",
                            time: "10:00 AM",
                            hospitalName: "Clinique Hospital",
                            doctorName: "Dr. Krishan Kumar",
                            isNext: true,
                        }}
                        bgColor={cardColor[cardColor.length - 3]}
                    />
                    <PatientDetailsCard
                        {...{
                            name: patientData?.patient.firstName + " " + patientData?.patient.lastName,
                            gender: patientData?.gender,
                            bloodGroup: patientData?.patient.details.bloodGroup,
                        }}
                        backgroundColor={cardColor[0]}
                        buttonText={"Manage"}
                        onButtonClick={() => { navigate("/patient/manage") }}
                    />
                </Grid>
            </Box>
            <Box mt={12}>
                <Heading size="lg" mb="6">
                    Featured Blogs
                </Heading>
                <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                    {blogs.map((blog, index) => {
                        return (
                            <CustomCard
                                backgroundColor={cardColor[index]}
                                key={index}
                                // imageUrl={DoctorsSVG}
                                altText="Placeholder"
                                title={blog.title}
                                description={blog.description}
                                buttonText="Read More"
                                color={cardColor[0]}
                            />
                        );
                    })}
                </Grid>
            </Box>
        </Box>
    );
};
