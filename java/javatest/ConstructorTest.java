import java.util.Random;

public class ConstructorTest {

    public static void main(String[] args) {
        Employee[] staff = new Employee[3];

        staff[0] = new Employee("哈利", 40000);
        staff[1] = new Employee(50000);
        staff[2] = new Employee();

        for (Employee e : staff) {
            System.out.println("name" + e.getName() + ",id=" + e.getId() + ",salary=" + e.getSalary());
        }

    }
}

class Employee {
    private static int nextId;

    private int id;
    private String name = "";
    private double salary;

    // 类的静态数据初始化代码
    static {
        Random generator = new Random();
        nextId = generator.nextInt(10000);
    }

    // 对象的初始化代码
    {
        id = nextId;
        nextId++;
    }

    // three overloaded constructors
    // 对象创建初始化
    public Employee(String n, double s) {
        name = n;
        salary = s;
    }

    public Employee(double s) {
        // 调用 Employee(String,double)构造器
        this("Employee #" + nextId, s);
    }

    // 默认构造器
    public Employee() {
        // 就是最上面默认的
    }

    public String getName() {
        return name;
    }

    public double getSalary() {
        return salary;
    }

    public int getId() {
        return id;
    }
}