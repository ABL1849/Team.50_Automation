const Attendance = require('../models/Attendance');
const User = require('../models/User');

exports.attendance = async (req, res) => {
    try {
        const { email, date, status, clockIn, clockOut } = req.body;
        if (!date || !status || !clockIn || !clockOut || !email) {
            return res.status(400).json({
                success: false,
                message: 'Fill data properly'
            });
        }

        // Convert clockIn and clockOut strings to Date objects
        const clockInTime = new Date(clockIn);
        const clockOutTime = new Date(clockOut);

        // Calculate the difference in milliseconds
        const diff = Math.abs(clockOutTime - clockInTime);
        
        // Convert milliseconds to hours
        const hours = diff / (1000 * 60 * 60);

        // Round to 2 decimal places
        const roundedHours = hours.toFixed(2);

        // Calculate overtime if hours exceed 8
        const overtime = hours > 8 ? (hours - 8).toFixed(2) : 0;

        const isUser = await User.findOne({email:email})

        const data = await Attendance.create({
            user:isUser._id,
            date,
            status,
            clockIn: clockInTime,
            clockOut: clockOutTime,
            hours: roundedHours,
            overtime
        });

        if (!data) {
            return res.status(500).json({
                success: false,
                message: 'Unable to add details'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Details added successfully',
            data: data
        });
    } catch (err) {
        console.log('Attendance Error:', err);
        return res.status(401).json({
            success: false,
            message: 'Unable to process attendance'
        });
    }
};
