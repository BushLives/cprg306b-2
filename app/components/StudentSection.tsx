import data from "../../data/students.json";

const StudentSection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 lg:gap-8 justify-self-start sm:px-2 pt-12">
      {data.students.map((student) => (
        <div
          key={student.id}
          className="bg-slate-800 rounded-4xl text-center p-6 w-60"
        >
          <h2 className="text-2xl text-white">
            {student.firstName} {student.lastName}
          </h2>
          <p className="text-gray-500">{student.dob}</p>
          <p className="text-white">Grade: {student.grade}</p>
        </div>
      ))}
    </div>
  );
};

export default StudentSection;
