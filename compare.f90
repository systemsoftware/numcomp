program compare
    implicit none

    real :: count 

    real :: origcount;

    real :: sum = 0

    real :: largest = 0

    real :: smallest = 1000000

    real :: num

    real :: avg

    print *, "Enter count: "

    read(*,*) count

    origcount = count

    do while (count .gt. 0)

        print  *, "Enter number: "

        read(*,*) num

        if (num .gt. largest) largest = num
        if(num .lt. smallest) smallest = num

        sum = sum + num

        count = count - 1;

    end do

    avg = sum / origcount

    print *, "Largest: ", largest, "Smallest: ", smallest, "Sum: ", sum, "Average: ", avg

end program compare
