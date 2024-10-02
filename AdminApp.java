
package AdminPanel;

import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.IdentityHashMap;
import java.util.List;
import java.util.Scanner;

import Employee.Repositary.EmployeeRepositary;
import Employee.Repositary.EmployeeSalaryRepositary;
import Employee.Service.AttendanceService;
import Employee.Service.EmployeeSalaryService;
import Employee.Service.EmployeeService;
import Employee.Service.EmployeeWorkServices;
import Employee.model.AttendanceModel;
import Employee.model.EmployeeModel;
import Employee.model.SalaryModel;
import EmployeePanel.EmployeeloginModel;

public class AdminApp {
	public static void main(String[] x) throws SQLException {
		int choice = 0, choice1 = 0;

		float DayBySalary = 0;

		int id, contact, pid;
		String name, email, gender, adress, username, Userpassword;

		AdminLogin admin = null;

		Scanner sc = new Scanner(System.in);

		EmployeeModel model;

		do {
			System.out.println("Welcome");

			System.out.println("Enter 1: For Admin Login");
			System.out.println("Enter 2: For Employee Login.");

			System.out.println("Enter your Choice..........");
			choice = sc.nextInt();

			EmployeeService es = new EmployeeService();
			EmployeeWorkServices es1 = new EmployeeWorkServices();
			AttendanceService es2 = new AttendanceService();

			switch (choice) {
			case 1:
				sc.nextLine();
				System.err.println("Enter UserName:");
				String user = sc.nextLine();// admin

				System.err.println("Enter Password:");
				String password = sc.nextLine();// 1212

				if (es.getAdmin() != null) {
					System.out.println("Verification Step's:");

					admin = es.getAdmin();

					if (admin.getUsername().equals(user) && admin.getPassword().equals(password)) {

						System.err.println("Verified");
						System.out.println();

						do {
							System.out.println("Enter 1: Add Employee................");
							System.out.println("Enter 2: Show Information of Employee...........");
							System.out.println("Enter 3: Delete Information of Employee...........");
							System.out.println("Enter 4: Update Information of Employee...........");
							System.out.println("Enter 5: Search Employee Using NAME ................");
							System.out.println("Enter 6:For Attendance3" + " ................");
							System.out.println("Enter 7:For Monthly  Salary" + " ................");
							System.out.println("Enter 8:For Date Wise  Salary" + " ................");

							System.out.println("Enter Your Choice........");

							choice1 = sc.nextInt();

							switch (choice1) {
							case 1:
								sc.nextLine();

								System.out.println(
										"Enter     Eid   Econtact    EName     EEmail    EGender       EAdress  Username  Password     Employee Position");

								id = sc.nextInt();
								contact = sc.nextInt();
								sc.nextLine();
								name = sc.nextLine();
								email = sc.nextLine();
								gender = sc.nextLine();
								adress = sc.nextLine();
								username = sc.nextLine();
								Userpassword = sc.nextLine();

								pid = sc.nextInt();

								EmployeeModel modell = new EmployeeModel(id, name, contact, email, gender, adress,
										username, Userpassword, pid);

								System.out.println();

								int result = es.addEmployee(modell);

								if (result == 1) {
									System.err.println("Successfully Added............................");
								} else {
									System.err.println("Some problem is HERE............................");
									System.out.println();
								}

								break;

							case 2:

								sc.nextLine();

								List<EmployeeModel> list;

								try {
									list = es.showData();

									if (list != null) {

										System.out.println("Hey user You Have List of All EMployee ");
										System.out.println("________________________");

										for (EmployeeModel m : list) {
											System.err.println(m.getEid() + "\t" + m.getEname() + "\t" + m.getContact()
													+ "\t" + m.getEmail() + "\t" + m.getGender() + "\t" + m.getAdress()
													+ "\t" + m.getUsername() + "\t" + m.getPassword() + "\t"
													+ m.getPid());
										}

										System.out.println("===================================");
									} else {
										System.err.println("All Data EMpty");
									}
								} catch (Exception ex) {
									System.err.println("Error" + ex);
								}
								break;

							case 3:

								System.out.println("Enter Employee Id");
								int id4 = sc.nextInt();

								int result3 = es.deletData(id4);

								if (result3 > 0) {
									System.err.println("Successfully Deleted........................");
								} else {
									System.err.println("Id Not Present ........................");
								}

								break;

							case 4:

								System.out.println("Enter Employee id And Name for Update ");

								int emploid = sc.nextInt();

								sc.nextLine();

								String ename = sc.nextLine();

								model = new EmployeeModel();

								model.setEid(emploid);
								model.setEname(ename);
								result = es.dataUpdate(model);

								if (result > 0) {
									System.err.println("Successfully Update........................");
								} else {
									System.err.println("Some Problem........................");
								}

								break;

							case 5:

								sc.nextLine();
								List<EmployeeModel> list1;

								int flag = 0;

								list1 = es.showData();

								System.out.println("Enter your Employee Name For Search .....");

								name = sc.nextLine();

								for (EmployeeModel m : list1) {

									if (m.getEname().equals(name)) {
										System.err.println(m.getEid() + "\t" + m.getEname() + "\t" + m.getContact()
												+ "\t" + m.getEmail() + "\t" + m.getAdress() + "\t" + m.getGender()
												+ "\t" + m.getUsername() + "\t" + m.getPassword());
										flag = 1;
										break;
									}
								}

								if (flag != 1) {
									System.err.println("Employee Not Present........");
								}

								break;

							case 6:

								AttendanceService aSer = new AttendanceService();

								System.out.println("Enter the id ");

								int id1 = sc.nextInt();

								boolean result1 = aSer.takeAttendance(id1);

								if (result1) {
									System.err.println("Data added succes");
								} else {
									System.err.println("Data added failed");
								}
								break;

							case 7:

								sc.nextLine();

								List<SalaryModel> list2;

								EmployeeSalaryService ss = new EmployeeSalaryService();

								SalaryModel sm = new SalaryModel();

								try {
									System.out.println("Enter Your Id     Month     And   Name ");
									int id2 = sc.nextInt();

									int Month = sc.nextInt();

									sc.nextLine();
									String name1;
									name1 = sc.nextLine();

									list2 = ss.totalSalary(id2, name1, Month);

									if (list2 != null) {
										for (SalaryModel sl : list2) {
											System.out.println(
													"Employee Id                 Employee Name            Annual Package         Total Working Days");

											System.err.println(sl.getId() + "\t\t\t\t\t" + sl.getName() + "\t\t\t\t\t"
													+ sl.getAnnualPackage() + "\t\t\t\t\t" + sl.getCount());

											float DaytotalSalary = sl.getCount() * (sl.getAnnualPackage() / 365);
											System.out.println();
											System.err.println("The Monthly Salary of Employee " + DaytotalSalary);
											System.out.println();

										}

									} else {
										System.err.println("Data Not Found");
									}
								} catch (Exception ex) {
									System.out.println("Exception is " + ex);
								}
								break;

							case 8:

								sc.nextLine();

								int pack = 0;

								EmployeeSalaryRepositary ess = new EmployeeSalaryRepositary();

								System.out.println("Enter     id        Start Date (YY-MM-DD)         End Date");

								int id3 = sc.nextInt();
								sc.nextLine();
								String StartDate = sc.nextLine();
								String EndDate = sc.nextLine();
								int count = 0;

								EmployeeSalaryService s = new EmployeeSalaryService();

								float value = s.DateWiseSalary(id3, StartDate, EndDate, count);

								if (value > 0) {
									int pac = ess.getPackage(pack, id3);

									DayBySalary = value * (pac / 365);

									System.err.println("The Sallary is=" + DayBySalary);
									System.err.println();

								} else {
									System.err.println("There Are Some Problem");
								}

								break;

							}
						} while (choice1 <= 8);
					} else {
						System.err.println("Incorrect UserName and Password");
					}
				}

				else {
					System.err.println("Please Register..............................!");
				}

				break;

			case 2:

				break;
			}

		}

		while (choice <= 2);

	}
}
