import { Box, Grid, Heading } from "@chakra-ui/react";
import { CustomCard } from "../../Components/CustomCard";
import AppointmentCard from "../../Components/AptCard";

const cardColor: string[] = ["#ffdc73", "#b6e8de", "#b2e5ff", "#fe9dad", "#f5bace"];
const blogs = [
    {
        title: "Unlocking the Power of Balanced Diets",
        description:
            "Discover how balanced diets play a pivotal role in maintaining optimal health. Learn about essential nutrients, portion control, and meal planning tips.",
    },
    {
        title: "Revolutionize Your Skincare Routine",
        description:
            "Explore the latest skincare trends and expert tips for achieving radiant and healthy skin. Uncover the secrets to addressing common skin concerns and maintaining a glowing complexion.",
    },
    {
        title: "The Importance of Mental Well-being",
        description:
            "Delve into strategies for enhancing mental well-being and managing stress effectively. Explore mindfulness techniques, self-care practices, and resources for seeking professional support.",
    },
    {
        title: "Fitness Fundamentals: A Beginner's Guide",
        description:
            "Embark on a journey to fitness with our comprehensive beginner's guide. Learn about the importance of physical activity, setting realistic goals, and creating a personalized workout plan.",
    },
];

export const PatientDashboard = () => {
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
                            date: "2024-02-17",
                            time: "10:00 AM",
                            hospitalName: "Medisure",
                            doctorName: "Dr. Smith",
                            isNext: false,
                        }}
                        bgColor={cardColor[cardColor.length - 4]}
                    />
                    <AppointmentCard
                        {...{
                            date: "2024-02-17",
                            time: "10:00 AM",
                            hospitalName: "Clinique Hospital",
                            doctorName: "Dr. Smith",
                            isNext: true,
                        }}
                        bgColor={cardColor[cardColor.length - 3]}
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
