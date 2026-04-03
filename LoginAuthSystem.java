 import java.util.HashMap;
import java.util.Scanner;

public class LoginAuthSystem {

    static HashMap<String, String> users = new HashMap<String, String>();
    static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {

        while (true) {
            System.out.println("\n===== LOGIN AUTHENTICATION SYSTEM =====");
            System.out.println("1. Register");
            System.out.println("2. Login");
            System.out.println("3. Exit");
            System.out.print("Choose option: ");

            int choice = sc.nextInt();
            sc.nextLine();

            switch (choice) {

                case 1:
                    register();
                    break;

                case 2:
                    login();
                    break;

                case 3:
                    System.out.println("Exiting system...");
                    return;

                default:
                    System.out.println("Invalid choice!");
            }
        }
    }

    static void register() {
        System.out.print("Enter username: ");
        String username = sc.nextLine();

        if (users.containsKey(username)) {
            System.out.println("Username already exists!");
            return;
        }

        System.out.print("Enter password: ");
        String password = sc.nextLine();

        users.put(username, password);
        System.out.println("Registration successful!");
    }

    static void login() {
        System.out.print("Enter username: ");
        String username = sc.nextLine();

        System.out.print("Enter password: ");
        String password = sc.nextLine();

        if (users.containsKey(username) && users.get(username).equals(password)) {
            System.out.println("Login successful!");
            securedPage(username);
        } else {
            System.out.println("Invalid username or password!");
        }
    }

    static void securedPage(String username) {
        System.out.println("\n===== SECURED PAGE =====");
        System.out.println("Welcome " + username + "!");
        System.out.println("You have successfully accessed the secured page.");
    }
}