# Threads

## Why Multi-Threading?
1. Better CPU and IO utilization
2. High application responsiveness	

## Multi-Threading issues
1. Race Condition
2. Invisible writes
3. Congestion
4. Deadlock
5. Starvation
6. Slipped Conditions
7. Missed Signals

<br>

## Thread Lifecycle
![[Pasted image 20211116081758.png]]
 
**New**: When we create a new Thread object using new operator, thread state is New Thread. At this point, thread is not alive and it’s a state internal to Java programming.

**Runnable**: When we call start() function on Thread object, it’s state is changed to Runnable. The control is given to Thread scheduler to finish it’s execution. Whether to run this thread instantly or keep it in runnable thread pool before running, depends on the OS implementation of thread scheduler.

**Running**: When thread is executing, it’s state is changed to Running. Thread scheduler picks one of the thread from the runnable thread pool and change it’s state to Running. Then CPU starts executing this thread. A thread can change state to Runnable, Dead or Blocked from running state depends on time slicing, thread completion of run() method or waiting for some resources.

**Blocked/Waiting**: A thread can be waiting for other thread to finish or it can be waiting for some resources to available.

For example producer consumer problem or waiter notifier implementation or IO resources, then it’s state is changed to Waiting. Once the thread wait state is over, it’s state is changed to Runnable and it’s moved back to runnable thread pool.

**Dead**: Once the thread finished executing, it’s state is changed to Dead and it’s considered to be not alive.


## 4 ways to create a thread
1. Extend Thread class and override the run()
```java
public class ThreadAPI1 {
    public static class MyThread extends Thread {
        public void run() {
            System.out.println("Thread is running");
        }
    }

    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start();
    }
}
```

2. Create anonymous implementation of the Runnable Interface
```java
public class ThreadAPI2 {
    public static void main(String[] args) {
        Runnable runnable = new Runnable() {
            @Override
            public void run() {
                System.out.println("Thread is running");
            }
        };

        Thread thread = new Thread(runnable);
        thread.start();
    }
}
```

3. Java lambda expression
```java
public class ThreadAPI3 {
    public static void main(String[] args) {
        Runnable runnable = () -> {
            System.out.println("Thread is running");
        };

        Thread thread = new Thread(runnable);
        thread.start();
    }
}
```

4. Implement the Runnable Interface
```java
public class ThreadAPI4 implements Runnable {

    @Override
    public void run() {
        System.out.println("Thread is running");
    }

    public static void main(String[] args) {
        ThreadAPI4 threadAPI4 = new ThreadAPI4();
        Thread thread = new Thread(threadAPI4);
        thread.start();
    }
}
```


## Stop Thread
```java
public class StopThread {
    public static class StoppableRunnable implements Runnable {

        private boolean stopRequested = false;

        public synchronized void requestStop() {
            this.stopRequested = true;
        }

        public synchronized boolean isStopRequested() {
            return this.stopRequested;
        }

        private void sleep(long millis) {
            try {
                Thread.sleep(millis);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        @Override
        public void run() {
            System.out.println("StoppableRunnable is running");
            while (!isStopRequested()) {
                sleep(1000);
                System.out.println("...");
            }
            System.out.println("StoppableRunnable is stopped");
        }
    }

    public static void main(String[] args) {
        StoppableRunnable sr = new StoppableRunnable();
        Thread thread = new Thread(sr);
        thread.start();

        try {
            Thread.sleep(5000);
        } catch (Exception e) {
            e.printStackTrace();
        }

        System.out.println("Requesting stop");
        sr.requestStop();
        System.out.println("Stop Requested");
    }
}
```



## Use Case 
When single thread is taking long time to complete a computational activity, you should break it into small tasks and use multi-threading to reduce computation time.

You can see lot of use cases for multi threading in your project.

1.  Where some tasks can run independently with-out depending on other tasks ( Just span a new `Thread` or submit `Runnable/Callable` tasks to `ExecutorService/ThreadPoolExecutor`)
    
2.  When you need to wait for completion of multiple parallel tasks to proceed with next task ( `invokeAll()`)
    
    e.g. Task 1 starts three independent tasks Task 2, Task 3 and Task 4 but Task 5 has to start after completion of Task 2, Task 3 and Task 4.
    

> ```java
>  Task 1              
> ----->               
>          Task 2
>          ----->
>          Task 3
>          ----->
>          Task 4
>          ----->
>                   Task 5
> -------------------------->
>                   
> ```

3.  System is capable of using multiple **CPU cores**
4.  When you have use cases like **Fork-Join** tasks ( use: [ForkJoinPool](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ForkJoinPool.html))
5.  When you want to show progress of long computation task ( Progress bar can be shown in one thread and long computation task can be executed by other Thread)

Related posts:

[How to properly use Java Executor?](https://stackoverflow.com/questions/33596079/how-to-properly-use-java-executor/33596230#33596230)

[Whether to use invokeAll or submit - java Executor service](https://stackoverflow.com/questions/34440604/whether-to-use-invokeall-or-submit-java-executor-service/34798567#34798567)

[Java's Fork/Join vs ExecutorService - when to use which?](https://stackoverflow.com/questions/21156599/javas-fork-join-vs-executorservice-when-to-use-which/34922218#34922218)

[wait until all threads finish their work in java](https://stackoverflow.com/questions/7939257/wait-until-all-threads-finish-their-work-in-java/36797569#36797569)






Reference: http://tutorials.jenkov.com/java-concurrency/index.html
